const jwt=require('jsonwebtoken');
const {token_secret_key}=require('../env-config');

let tokenVerifier=(req, res, next)=>{

    let authCookie=req.cookies.authorizationCookie;

    if(authCookie){

        const validToken=jwt.verify(authCookie, token_secret_key);

        if(validToken){
            
            statusCode=200;

            tokenInfo=validToken;

            next();
        }else{

            expiryLimit=3600000;

            if(validToken.exp-validToken.iat>expiryLimit){

                statusCode=401;

                next();
                
            }else{

                statusCode=403;

                next();
            }

        }

    }else{
        statusCode=500;  

        next();
    }

}
module.exports=tokenVerifier;