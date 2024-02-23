const sqlite3=require('sqlite3');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const db=new sqlite3.Database('./beleptetes.db');

const createToken=(id)=>{
    return jwt.sign({id}, process.env.TOKEN_KEY, {expiresIn: "1h"});
}

const Login = async (req,res)=>{
    const {username, password} = req.body;

    if(!username || !password){
        res.send({"message":"Kérem adjon meg egy felhasználó nevet és egy jelszót!"});
        return;
    };

    let user = [];
    db.all("select * from felhasznalok where username = ?", [username], async (err, rows) => {
        if(err){
            res.status(400).send(err);
        }else{
            rows.forEach(function (row) {
                user.push(row);                
            });
            if(user.length > 0){
                const jelszo = await bcrypt.compare(password, user[0].password)
                if(!jelszo){
                    res.json({"message":"Hibás jelszó!"});
                }else{
                    const token = createToken(user[0].id);
                    res.json({"message":"Sikeres bejelentkezés", "token": token});
                }
            }else{
                res.json({"message":"Nincs ilyen felhasznlónév!"})
            };
        };
    });
};

const Register = async (req,res) => {
    const {username, password, email, vezeteknev, keresztnev} = req.body;

    if(!username || !password || !email || !vezeteknev || !keresztnev){
        res.status(400).send("Kérem adjon meg minden adatot!");
        return;
    };

    const hashPassword = await bcrypt.hash(password, 10);
    var sql = "insert into felhasznalok (username, password, email, vezeteknev, keresztnev) values (?,?,?,?,?)";
    db.all(sql, [username, hashPassword, email, vezeteknev, keresztnev], err => {
        if(err){
            if(err.code == "SQLITE_CONSTRAINT"){
                res.status(400).json({"error":"Már regisztráltak ilyen felhasználó névvel!"});
                return
            }
            res.status(400).send(err);
        }else{
            res.status(200).json({"message":"Sikeres regisztráció!"});
        }
    });
}

const userInfo = async (req,res) => {
    const token=req.headers.authorization.split(' ')[1];
    const idFromtoken=jwt.verify(token,process.env.TOKEN_KEY);
    console.log(idFromtoken.id);

    let user = [];
    db.all("select * from felhasznalok where id = ?", idFromtoken.id, async (err, rows) => {
        if(err){
            res.status(400).send(err);
        }else{
            rows.forEach(function (row) {
                user.push(row);                
            });
            if(user.length > 0){
                res.send(user);
            }else{
                res.json({"message":"Be kell jelentkezni!"})
            };
        };
    });
}

module.exports={
    Login,
    Register,
    userInfo
};