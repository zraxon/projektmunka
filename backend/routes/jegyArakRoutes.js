const express=require('express');
const router=express.Router();

const{ JegyArak }=require('../controllers/jegyArakController.js');
router.get('/jegyarak', JegyArak);

module.exports=router;