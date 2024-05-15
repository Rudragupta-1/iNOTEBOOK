const express=require('express');
const User=require('../models/Note');
const router=express.Router();

router.get('/',(req,rep)=>{
    // console.log(req.body);
    // const user=User.req.body;
    // user.save();
    rep.send([]);
})
module.exports=router;