const { createPool }=require('mysql');

const con = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const JegyArak = (req, res) => {
    con.query("select TPS_Tipus, AR from tipusarak", (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        };
    });
};

module.exports = {
    JegyArak
};