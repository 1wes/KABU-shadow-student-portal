const express=require('express');
const router=express();
const tokenVerifier=require('./auth');

router.get('/checkCookie',tokenVerifier, (req, res)=>{

    switch(statusCode){

        case 200:

            res.sendStatus(statusCode);

            break;
        
        case 401:

            res.sendStatus(statusCode);

            break;

        case 403:

            res.sendStatus(statusCode);

            break;
    }
});
module.exports=router;