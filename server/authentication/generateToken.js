const jwt=require('jsonwebtoken');
const {token_secret_key}=require('../env-config');

let secret_key=token_secret_key;

const generateToken=(reg_no)=>{
    return jwt.sign(reg_no, secret_key, {expiresIn:'1h'});
}

module.exports=generateToken;