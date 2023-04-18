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

        let getEmail=`SELECT * from students WHERE reg_no=?`;

        con.query(getEmail,reg, (err, result)=>{

            if(err){
                throw err
            }

            console.log(result[0])

            let subject=`KABARAK PORTAL RESET PASSWORD LINK`;
            let name=`${result[0].surname} ${result[0].first_name} ${result[0].last_name}`;
            let capitalizedName=name.toUpperCase();

            const mailOptions={
                from:email,
                to:result[0].email,
                subject:subject,
                html:`Hi ${capitalizedName}.`+"<br/>Kindly click <a href='me/there'>here</a> to reset your password. <hr /> Note that this is an auto generated email."+
                " Kindly do not reply to it. <br/> <br/>"+
                "Incase of any challenges, please contact Admission office for assistance. <br/> Contact Email : <a href='mailto=okemwawes@gmail.com'>okemwawes@gmail.com</a>"+
                "<br/> <br/> Best Regards."
            }

            transporter.sendMail(mailOptions, (err, info)=>{

                if(err){
                    throw err
                }

                res.send(result[0].email);

            })
        })
    }
})
module.exports=router