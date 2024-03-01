const express=require('express');
const router=express.Router();

const{Film_lista, Register, Login}=require('../controllers/beleptetesController');
//const {vedett}=require('../mwares/authMiddleware');

router.get('/filmek',Film_lista);
router.post('/register', Register);
router.post('/login', Login);

module.exports=router;