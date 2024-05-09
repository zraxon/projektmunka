const express=require('express');
const router=express.Router();

const{ Kosarak, UjKosar, TorolKosar }=require('../controllers/kosarakController.js');
router.get('/kosarak', Kosarak);
router.post('/ujkosar', UjKosar);
router.delete('/torolkosar', TorolKosar);

module.exports=router;