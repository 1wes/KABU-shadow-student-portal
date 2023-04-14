const express=require('express');
const app=express();
const router=express.Router();
const tokenVerifier=require('./auth');
const con=require('../database');
const transporter=require('../utils/mailer');
const email=require('../env-config')

app.use(tokenVerifier);


router.post("/forgotPassword", tokenVerifier, (req, res)=>{

    if (statusCode==200){
        
        let {reg}=req.body;

        let getEmail=`SELECT email from students WHERE reg_no=?`;

        con.query(getEmail,reg, (err, result)=>{

            if(err){
                throw err
            }

            const mailOptions={
                from:email,
                to:result[0].email,
                subject:"Test Email",
                text:"I have successfully sent the email"
            }

            transporter.sendMail(mailOptions, (err, info)=>{

                if(err){
                    throw err
                }

                console.log("Mail successfully sent "+info.response);
            })
             
        })
    }


})
module.exports=router