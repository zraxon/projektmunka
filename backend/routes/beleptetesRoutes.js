const express=require('express');
const router=express.Router();

const{Login, Register, userInfo}=require('../controllers/beleptetesController');
const {vedett}=require('../mwares/authMiddleware');

router.post('/login',Login);
router.post('/register',Register);
router.get('/userinfo',vedett, userInfo);
//hallo
module.exports=router;