const tokenVerifier= require("./auth");
const express=require('express');
const router=express();

router.get('/loginAuth', tokenVerifier, (req, res)=>{

    switch(statusCode){

        case 200:

            res.send(tokenInfo.reg_no);

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