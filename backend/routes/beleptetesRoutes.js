const express=require('express');
const router=express.Router();

const{film_lista}=require('../controllers/beleptetesController');
//const {vedett}=require('../mwares/authMiddleware');

router.post('/login',film_lista);

module.exports=router;