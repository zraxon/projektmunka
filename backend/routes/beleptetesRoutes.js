const express=require('express');
const router=express.Router();

const{Film_lista, FilmNev_lista, Register, Login, getKep}=require('../controllers/beleptetesController');
//const {vedett}=require('../mwares/authMiddleware');

router.get('/filmek',Film_lista);
router.get('/filmek/:Id',FilmNev_lista);
router.post('/register', Register);
router.post('/login', Login);
router.get('/getKep/:E_mail', getKep);

module.exports=router;