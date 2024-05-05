const express=require('express');
const router=express.Router();

const{Film_lista, FilmNev_lista, Register, Login, getInfo, validation, modositEmail, modositTel, modositAdo, modositJelszo, modositPkep}=require('../controllers/beleptetesController');
//const {vedett}=require('../mwares/authMiddleware');

router.get('/filmek',Film_lista);
router.get('/filmek/:Id',FilmNev_lista);
router.post('/register', Register);
router.post('/login', Login);
router.get('/getInfo', getInfo);
router.get('/validation', validation);

router.patch('/modositEmail', modositEmail);
router.patch('/modositTel', modositTel);
router.patch('/modositAdo', modositAdo);
router.patch('/modositJelszo', modositJelszo);
router.patch('/modositPkep', modositPkep);

module.exports=router;