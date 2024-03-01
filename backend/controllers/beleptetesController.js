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

const Register = (req, res) => {
    const {Vnev, Knev, E_mail, Telefonszam, Allapot, Adoszam, Jelszo} = req.body;
    con.query("insert into vasarlok (Vnev, Knev, E_mail, Telefonszam, Allapot, Adoszam, Jelszo) values (?,?,?,?,?,?,?)", [Vnev, Knev, E_mail, Telefonszam, Allapot, Adoszam, Jelszo], (err) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send("Sikeres regisztráció!");
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
                res.status(200).send("Sikeres bejelentkezés!");
            } else {
                res.status(400).send("Hibás E-mail cím vagy jelszó!")
            }
        };
    });
};

module.exports = {
    Film_lista,
    Register,
    Login
};