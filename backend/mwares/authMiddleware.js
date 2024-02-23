const jwt=require('jsonwebtoken');
const sqlite3=require('sqlite3');
const db=new sqlite3.Database('../beleptetes.db');

const vedett = async (req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token=req.headers.authorization.split(' ')[1];
            console.log(token);
            const idFromtoken=jwt.verify(token,process.env.TOKEN_KEY); 
            console.log(idFromtoken.id);
            next();
            
        } catch (error) {
            res.status(401);
            throw new Error("Be kell jelentkezni!!!");
        }
       

    }
    if(!token){
        res.status(401);
        throw new Error("Be kell jelentkezni!!");
    }
};

module.exports={vedett};