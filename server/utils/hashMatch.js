const bcrypt=require('bcrypt');

let compareString= async (input_variable, stored_variable)=>{
    
    return await bcrypt.compare(input_variable, stored_variable);

}

module.exports=compareString;