const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const token_secret_key=require('../env-config');

router.post("/auth", (req, res)=>{

    let token=req.body.token

    console.log(token);

    const secret_key=JSON.stringify(token_secret_key);

    let decoded=jwt.verify(token, secret_key);

    console.log(decoded.reg_no);

})

module.exports=router;