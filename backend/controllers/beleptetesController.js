const { createPool }=require('mysql');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const con = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mozi"
});

const Film_lista = (req,res) => {
    con.query("select * from filmek", (err, result) => {
        if (err){
            res.status(400).send(err);
        }else{
            res.status(200).send(result);
        };
    });
}

module.exports = {
    Film_lista
};