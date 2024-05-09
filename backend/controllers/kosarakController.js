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
            con.query("select k.Darabszam, f.cim, f.kepLink, f.Korhatar, f.Kategoria, f.Hossz, v.Datum, v.IdoPont, v.VTT_TPS_Tipus, k.Datum as D2, v.Id from kosarak k join vetitesek v on (k.VTS_Id = v.Id) join valtozatok vt on (v.VTT_FIM_Id = vt.FIM_Id) join filmek f on (vt.FIM_Id = f.Id) where VSO_E_mail = ?", [userEmail], (err, result) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).send(result);
                };
            });
        }
    });
};

const UjKosar = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const { VTS_Id, darabszam } = req.body;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Érvénytelen token!" });
        } else {
            const userEmail = decoded.email;
            con.query("insert into kosarak (VTS_Id, VSO_E_mail, darabszam) VALUES (?, ?, ?)", [VTS_Id, userEmail, darabszam], (err, result) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).send({message: "Sikeresen a kosárba helyezve!"});
                };
            });
        }
    });
};

const TorolKosar = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const {Datum, VTS_Id} = req.body;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Érvénytelen token!" });
        } else {
            const userEmail = decoded.email;
            con.query("DELETE FROM kosarak WHERE Datum = ? AND VTS_Id = ? AND VSO_E_mail = ?", [Datum, VTS_Id, userEmail], (err, result) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).send({message: "Sikeres Törlés!"});
                };
            });
        }
    });
};

module.exports = {
    Kosarak,
    UjKosar,
    TorolKosar
};