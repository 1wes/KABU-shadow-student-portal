const crypto=require('crypto');

let generateResetToken=()=>{

    return token=crypto.randomInt(1, 1000000000).toString();

}
module.exports=generateResetToken;
