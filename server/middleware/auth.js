const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const {token_secret_key}=require('../env-config');

router.post("/auth", (req, res)=>{

    const token=req.headers['auth_token'];
    
    if(token){

        const validToken=jwt.verify(token, token_secret_key);

        if(validToken){
            res.status(200).send("Login validated");
        }else{
            res.status(401).send("Unauthorized token")
        }

    }else{
        res.status(403).send("Please provide a token");
    }


})

module.exports=router;