const { createPool }=require('mysql');

const con = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const Vetitesek = (req, res) => {
    con.query("select * from vetitesek v join termek t on (v.TRM_Id = t.Id) join mozik m on(t.MZI_Id = m.Id) join valtozatok vt on (v.VTT_FIM_Id = vt.FIM_Id) join filmek f on (vt.FIM_Id = f.Id);", (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        };
    });
};

module.exports = {
    Vetitesek
};