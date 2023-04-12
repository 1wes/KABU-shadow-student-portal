const jwt=require('jsonwebtoken');
const {token_secret_key}=require('../env-config');

let cookie=(req, res, next)=>{

    let authCookie=req.cookies.authorizationCookie;

    if(authCookie){

        const validToken=jwt.verify(authCookie, token_secret_key);

        if(validToken){
            statusCode=200;
            
            next();
        }else{
            statusCode=400;

            next();
        }


    }else{
        statusCode=500;  

        next();
    }

}

module.exports=cookie;