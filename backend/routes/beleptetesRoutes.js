const express=require('express');
const router=express.Router();

const{Film_lista}=require('../controllers/beleptetesController');
//const {vedett}=require('../mwares/authMiddleware');

router.get('/filmek',Film_lista);

module.exports=router;