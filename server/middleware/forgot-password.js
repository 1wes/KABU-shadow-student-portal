const express=require('express');
const app=express();
const router=express.Router();
const tokenVerifier=require('./auth');
const con=require('../database');
const transporter=require('../utils/mailer');
const {email, pwd_reset_link}=require('../env-config');
const token=require('../utils/createResetToken');
const {encryptToken}=require('../utils/resetTokenOps')

app.use(tokenVerifier);

router.post("/forgotPassword", tokenVerifier, (req, res)=>{

    switch (statusCode){

        case 200:
        
            let {reg}=req.body;

            let getEmail=`SELECT * from students WHERE reg_no=?`;

            con.query(getEmail,reg, (err, result)=>{

                if(err){
                    throw err
                }

                let resetToken=token();

                let urlToken=resetToken.split('+');

                let urlTokenTimestamp=urlToken[1];

                let encryptedToken=encryptToken(resetToken);

                let storeResetToken=`UPDATE students set pwd_reset_token=${urlToken[0]}, pwd_reset_token_timestamp=${urlTokenTimestamp}, enc_pwd_reset_token='${encryptedToken}' WHERE reg_no='${result[0].reg_no}'`;

                con.query(storeResetToken, (err, result)=>{

                    if(err){
                        throw err;
                    }

                    console.log("Successfully updated password reset credentials !!!")
                } )

                let subject=`KABARAK PORTAL RESET PASSWORD LINK`;
                let name=`${result[0].surname} ${result[0].first_name} ${result[0].last_name}`;
                let capitalizedName=name.toUpperCase();
                const finalUrl=new URL(pwd_reset_link);

                finalUrl.searchParams.append("user", `${result[0].reg_no}`);
                finalUrl.searchParams.append("Token", `${urlToken[0]}`);

                const mailOptions={
                    from:email,
                    to:result[0].email,
                    subject:subject,
                    html:`Hi ${capitalizedName}.<br/>Kindly click <a href=${finalUrl.href.replace(/%2F/g, '/')}>here</a> to reset your password. <hr /> Note that this is an auto generated email.`+
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

            break;

        case 401:

            res.sendStatus(statusCode);

            break;

        case 403:

            res.sendStatus(statusCode);

            break;
    }
}) 
module.exports=router;