const tokenVerifier=require('./auth');
const express=require('express');
const router=express();

router.get('/logout', tokenVerifier, (req, res)=>{

    if(statusCode){

        res.clearCookie('authorizationCookie', {domain:'localhost', path:'/'});

        res.sendStatus(200)
    }
})
module.exports=router;