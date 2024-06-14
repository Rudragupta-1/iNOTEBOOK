var jwt=require('jsonwebtoken')
const JWT_SECRET='rudra';
const fetchuser=(req,rep,next)=>{
        const token=req.header('auth-token');
        if(!token){
            rep.status(401).send({error:"PLease authenticate using a valid token"})
        }
        try{
            const data=jwt.verify(token,JWT_SECRET);
            req.user=data.user;
            next();
        }
        catch(error){
            rep.status(401).send({error:"PLease authenticate using a valid token"})
        }
}
module.exports=fetchuser;