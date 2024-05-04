const { createPool }=require('mysql');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { restart } = require('nodemon');

const con = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const Film_lista = (req, res) => {
    con.query("select * from filmek", (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        };
    });
};

const FilmNev_lista = (req, res) => {
    const [ Id ] = req.params.Id;
    con.query("select * from filmek where Id = ?", [Id], (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        };
    });
};

const generateToken=(email)=>{
    return jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"60000"});
}

const Register = (req, res) => {
    const {Vnev, Knev, E_mail2, Telefonszam, Adoszam, Jelszo2} = req.body;
    con.query("insert into vasarlok (Vnev, Knev, E_mail, Telefonszam, Allapot, Adoszam, Jelszo) values (?,?,?,?, 'Aktív',?,?)", [Vnev, Knev, E_mail2, Telefonszam, Adoszam, Jelszo2], (err, result) => {
        if (err) {
            res.status(400).send({"message": "0"});
        } else {    
            if (result != ""){
                const token = generateToken(E_mail2);
                res.status(200).json(token);
            } else {
                res.status(400).send({"message": "0"});
            }
        };
    });
};

const Login = (req, res) => {
    const {E_mail, Jelszo} = req.body;
    con.query("select E_mail, Jelszo from vasarlok where E_mail = ? and Jelszo = ?", [E_mail, Jelszo], (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            if (result != ""){
                const token = generateToken(result[0].E_mail)
                res.status(200).json(token);
            } else {
                res.status(400).send({"message": "0"});
            }
        };
    });
};

const getInfo = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: "Érvénytelen token" });
        } else {
            const userEmail = decoded.email;
            con.query("select pKep, E_mail, Telefonszam, Adoszam, Vnev, Knev from vasarlok where E_mail = ?", [userEmail], (err, result) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        }
    });
};

const validation = (req,res) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Érvénytelen token!" });
        } else {
            res.status(200).json({ message: "A token érvényes!" })
        }
    });
}

module.exports = {
    Film_lista,
    FilmNev_lista,
    Register,
    Login,
    getInfo,
    validation
};