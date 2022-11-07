const bcrypt=require('bcrypt');

let passwordMatch= async (input_password, stored_password)=>{
    
    return await bcrypt.compare(input_password, stored_password)

}

module.exports=passwordMatch;