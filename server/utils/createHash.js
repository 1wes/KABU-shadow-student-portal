import bcrypt from 'bcrypt';

let createHash=async(plain_varibale)=>{

    return await bcrypt.hash(plain_varibale, 10);
}
module.exports=createHash;