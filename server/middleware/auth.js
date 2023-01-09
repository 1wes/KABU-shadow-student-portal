const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const token_secret_key=require('../env-config');

router.post("/auth", (req, res)=>{

    const token=req.headers['auth_token'];


    if(token){

        console.log(token);

        const validToken=jwt.verify(token, JSON.stringify(token_secret_key));

        if(validToken){
            console.log("Login validated");
        }else{
            console.log("Invalid token")
        }

    }else{
        console.log("Please provide a token")
    }


})

module.exports=router;