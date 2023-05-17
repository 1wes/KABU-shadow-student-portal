const express=require('express');
const router=express();
const tokenVerifier=require('./auth');

router.get('/checkCookie',tokenVerifier, (req, res)=>{

    switch(statusCode){

        case 200:

            res.send(statusCode);

            break;
        
        case 401:

            res.send(statusCode);

            break;

        case 403:

            res.send(statusCode);

            break;
    }
});
module.exports=router;