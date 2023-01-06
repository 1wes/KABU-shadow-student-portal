const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const token_secret_key=require('../env-config');

router.post("/auth", (req, res)=>{

    // let token=req.headers['token'];

    // console.log(token);
    console.log(req.headers['token']);
    // console.log(req.body)

    // if(token){

    //     const decoded=jwt.verify(token, JSON.stringify(token_secret_key));

    //     console.log(decoded);
    // }else{
    //     console.log("Provide a token")
    // }

    // console.log(token);

    // const secret_key=JSON.stringify(token_secret_key);

    // let decoded=jwt.verify(token, secret_key);

    // console.log(decoded);

})

module.exports=router;