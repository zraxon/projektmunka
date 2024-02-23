const express=require('express');
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',require('./routes/beleptetesRoutes'));

app.listen(8000,()=>console.log("Running"));

app.get('/', (req,res) => {
    res.send('Felhasználó beléptetés');
});