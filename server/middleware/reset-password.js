const express=require('express');
const app=express();
const router=express.Router();
const tokenVerifier=require('./auth');
const con=require('../database');


app.use(tokenVerifier);

router.post("/forgotPassword", tokenVerifier, (req, res)=>{

    if (statusCode==200){

        let {reg}=req.body;

        console.log(reg)

        let emailSelector=`SELECT email from students WHERE reg_no='${reg}'`;

        let email=con.query(emailSelector, (err, result)=>{

            if(err){

                throw err
            }

            studentEmail=result[0].email;

        })
        
    }


})
module.exports=router