const { createPool }=require('mysql');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

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
    const Id = req.params.Id;
    con.query("select * from filmek where Id = ?", [Id], (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        };
    });
};

const generateToken=(email)=>{
    return jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"24h"});
}

const Register = async (req, res) => {
    const {Vnev, Knev, E_mail2, Telefonszam, Adoszam, Jelszo2} = req.body;
    const hashedPassword=await bcrypt.hash(Jelszo2, 10);
    con.query("insert into vasarlok (Vnev, Knev, E_mail, Telefonszam, Allapot, Adoszam, Jelszo) values (?,?,?,?, 'Aktív',?,?)", [Vnev, Knev, E_mail2, Telefonszam, Adoszam, hashedPassword], (err, result) => {
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

const Login = async (req, res) => {
    const {E_mail, Jelszo} = req.body;
    con.query("select E_mail, Jelszo from vasarlok where E_mail = ?", [E_mail], async (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            if (result.length > 0) {
                const hashedPassword = result[0].Jelszo;
                const jelszoEllenor = await  
                console.log(Jelszo)
                console.log(hashedPassword)
                console.log(jelszoEllenor)
                if (jelszoEllenor) {
                    const token = generateToken(result[0].E_mail)
                    res.status(200).json(token);
                } else {
                    res.status(400).send({message: "Hibás jelszó!"});
                }
            } else {
                res.status(400).send({message: "Nem található a felhasználó"});
            }
        }
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

const modositEmail = (req,res) => {
    const token = req.headers.authorization.split(' ')[1];
    const { Uj_Email } = req.body;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Érvénytelen token!" });
        } else {
            const userEmail = decoded.email;
            con.query("UPDATE vasarlok SET E_mail = ? WHERE E_mail = ?", [Uj_Email, userEmail], (err) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).json({message: "Sikeres E-mail frissítés!"});
                }
            });
        }
    });
}

const modositTel = (req,res) => {
    const token = req.headers.authorization.split(' ')[1];
    const { Uj_Telefonszam } = req.body;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Érvénytelen token!" });
        } else {
            const userEmail = decoded.email;
            con.query("UPDATE vasarlok SET Telefonszam = ? WHERE E_mail = ?", [Uj_Telefonszam, userEmail], (err) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).json({message: "Sikeres telefonszám frissítés!"});
                }
            });
        }
    });
}

const modositAdo = (req,res) => {
    const token = req.headers.authorization.split(' ')[1];
    var { Uj_Adoszam } = req.body;
    if (Uj_Adoszam == "") {Uj_Adoszam = null};
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Érvénytelen token!" });
        } else {
            const userEmail = decoded.email;
            con.query("UPDATE vasarlok SET Adoszam = ? WHERE E_mail = ?", [Uj_Adoszam, userEmail], (err) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).json({message: "Sikeres adószám frissítés!"});
                }
            });
        }
    });
}

const modositJelszo = (req,res) => {
    const token = req.headers.authorization.split(' ')[1];
    const { Uj_Jelszo } = req.body;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Érvénytelen token!" });
        } else {
            const userEmail = decoded.email;
            con.query("UPDATE vasarlok SET Jelszo = ? WHERE E_mail = ?", [Uj_Jelszo, userEmail], (err) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).json({message: "Sikeres jelszó frissítés!"});
                }
            });
        }
    });
}

const modositPkep = (req,res) => {
    const token = req.headers.authorization.split(' ')[1];
    const { Uj_Pkep } = req.body;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Érvénytelen token!" });
        } else {
            const userEmail = decoded.email;
            con.query("UPDATE vasarlok SET pKep = ? WHERE E_mail = ?", [Uj_Pkep, userEmail], (err) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).json({message: "Sikeres profilkép frissítés!"});
                }
            });
        }
    });
}


module.exports = {
    Film_lista,
    FilmNev_lista,
    Register,
    Login,
    getInfo,
    validation,
    modositEmail,
    modositTel,
    modositAdo,
    modositJelszo,
    modositPkep
};