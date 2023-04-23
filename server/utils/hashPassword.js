import bcrypt from 'bcrypt';

let hashPassword=async(plain_password)=>{

    return await bcrypt.hash(plain_password, 10);
}
module.exports=hashPassword;