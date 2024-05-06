const express=require('express');
const router=express.Router();

const{ Kosarak }=require('../controllers/kosarakController.js');
router.get('/kosarak', Kosarak);

module.exports=router;