const express=require('express');
const app=express();
const router=express.Router();
const tokenVerifier=require('./auth');
const con=require('../database');


app.use(tokenVerifier);


router.post("/forgotPassword", tokenVerifier, (req, res)=>{

    let getEmail=(reg, callback)=>{
    
        let emailSelector=`SELECT email from students WHERE reg_no=?`;
    
        con.query(emailSelector,reg, (err, result)=>{
    
            if(err){
    
                callback(null, err)
            }
    
            callback(null, result[0].email);
    
        })
    
    }

    if (statusCode==200){

        let {reg}=req.body;

        getEmail(reg,(err, data)=>{
            if(err){
                throw err
            }

            // Push the data to the environment variable
        })

        
    }


})
module.exports={
    forgotPassword:router
}