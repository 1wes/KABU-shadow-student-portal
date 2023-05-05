const bcrypt=require('bcrypt');

let hashPassword=async(plain_password)=>{

    return await bcrypt.hash(plain_password, 10);
}

let comparePassword= async (input_password, stored_password)=>{
    
    return await bcrypt.compare(input_password, stored_password);
}
module.exports={
    hashPassword,
    comparePassword 
}