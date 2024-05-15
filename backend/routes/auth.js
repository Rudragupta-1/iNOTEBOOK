const express=require('express');
const User=require('../models/User');
const router=express.Router();
const {body,validationResult}=require('express-validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
var fetchuser=require('../middleware/fetchuser');

const JWT_SECRET='rudra';

// ROUTE 1: Create a User using : POST "/api/auth/createuser". No login required.
router.post('/createuser',[
    body('name','Enter a vlid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 character').isLength({min:5}),  
],async(req,rep)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        //Check whether the user with this email exists already
        let user= await User.findOne({email:req.body.email});
        if(user)
            {
                return res.status(400).json({error:'Sorry a user with this email already exists'})
            }
            // const salt=;
            // const secPass=;
            //Create a new user
            user=await User.create({
                name:req.body.name,
                password:secPass,
                email:req.body.mail
            });
            const data={
                user:{
                    id:user.id
                }
            }
            const authtoken=jwt.sign(data,JWT_SECRET);
            res.json({authtoken})
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});
 
// ROUTE 2: Authentication a User using:POST "/api/auth/login".No login required

router.post('/login',[
body('email','Enter a valid email').isEmail(),
body('password','Password can not be blank').exists()
],async(req,rep)=>{
    let success=false;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return rep.send(400).status({errors:errors.array()})
    }
  const {email,password}=req.body;
  try{
    let user=await User.findOne({email});
    if(!user){
        success=false;
        return rep.status(400).send({error:"Please try to login with correct credentials"});
    }
    const passwordCompare= await bcrypt.compare(password,user.password)
    if(!passwordCompare){
        success=false;
        return rep.status(400).send({error:"Please try to login with correct credentials"});
    }
  const data={
    user:{
        id:user.id
    }
  }
  const authtoken=jwt.sign(data,JWT_SECRET);
  success=true;
  rep.json({success,authtoken});
}
catch(error){
    console.error(error.message);
    rep.status(500).send("Internal server error");
}
});

// ROUTE 3 : Get loggedin user details usin : POST "/api/auth/getuser" . Login required

router.post('/getuser',fetchuser,async(req,rep)=>{
    try{
        userId=req.user.id;
        const user=await User.findById('userId').select('-password')
        rep.send(user)
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
module.exports=router;