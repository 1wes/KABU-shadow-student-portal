const jwt=require('jsonwebtoken');
const {token_secret_key}=require('../env-config');

let tokenVerifier=(req, res, next)=>{

    let authCookie=req.cookies.authorizationCookie;

    if(authCookie){

        const isTokenValid=()=>{jwt.verify(authCookie, token_secret_key, (err,decoded)=>{
            if(err){
                errorInfo={
                    statusCode:401,
                    errorMessage:err.message
                }

                return new Error(errorInfo);
            }

            return decoded;
        })};

        const tokenIsValid=isTokenValid();

        if(tokenIsValid){

            statusCode=200;

            tokenInfo=tokenIsValid;

            next();
        }else{

            statusCode=errorInfo.statusCode;

            message=errorInfo.errorMessage;

            next();
        }

    }else{
        statusCode=403;  

        next();
    }
}
module.exports=tokenVerifier;