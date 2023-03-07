const jwt=require('jsonwebtoken');
const {token_secret_key}=require('../env-config');

let cookie=(req, res, next)=>{

    let authCookie=req.cookies.authorization-token;

    if(authCookie){

        const validToken=jwt.verify(authCookie, token_secret_key);

        if(validToken){
            res.status(200)

            next();
        }else{
            res.status(401)
        }
    }else{
        res.status(403);
    }

}

module.exports=cookie;