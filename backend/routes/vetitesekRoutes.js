const express=require('express');
const router=express.Router();

const{ Vetitesek, keresVet }=require('../controllers/vetitesekController.js');
router.get('/vetitesek', Vetitesek);
router.get('/keresvet/:filmId', keresVet);

module.exports=router;