const express=require('express');
const router=express.Router();

const{ Vetitesek }=require('../controllers/vetitesekController.js');
router.get('/vetitesek', Vetitesek);

module.exports=router;