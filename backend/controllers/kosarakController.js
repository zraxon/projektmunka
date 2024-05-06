const { createPool }=require('mysql');
const jwt=require('jsonwebtoken');

const con = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const Kosarak = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Érvénytelen token!" });
        } else {
            const userEmail = decoded.email;
            con.query("select k.Darabszam, f.cim, f.kepLink, f.Korhatar, f.Kategoria, f.Hossz, v.Datum, v.IdoPont, v.VTT_TPS_Tipus from kosarak k join vetitesek v on (k.VTS_Id = v.Id) join valtozatok vt on (v.VTT_FIM_Id = vt.FIM_Id) join filmek f on (vt.FIM_Id = f.Id) where VSO_E_mail = ?", [userEmail], (err, result) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).send(result);
                };
            });
        }
    });
};

module.exports = {
    Kosarak
};