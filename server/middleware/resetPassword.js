const express=require('express');
const app=express();
const router=express.Router();
const {decryptToken, matchToken}=require('../utils/resetTokenOps');
const con=require('../database');
const tokenVerifier=require('./auth');
const { token_validity } = require('../env-config');
const {hashPassword}=require('../utils/passwordOps');

app.use(tokenVerifier)

router.post('/login/forgotPassword/resetPassword', tokenVerifier, (req, res)=>{

    if(statusCode==200){

        let referringURL=req.headers.referer;

        let {confirmPassword}=req.body;

        let userInfo=referringURL.split('?')[1].split('=')

        let user=userInfo[1].split('&')[0];

        let token=userInfo[2];

        let getTokeninfo=`SELECT * from students where pwd_reset_token='${token}'`;

        con.query(getTokeninfo, async(err, result)=>{

            if(err){
                throw err;
            }

            if(result){

                // match the token with the retrieved reg number;
                if(result[0].reg_no==user){

                    let timeDifference=Date.now()-result[0].pwd_reset_token_timestamp;

                    if(timeDifference<token_validity){

                        const hashedPassword= await hashPassword(confirmPassword); 

                        let changePassword=`UPDATE students SET password='${hashedPassword}' where reg_no='${user}'`;

                        let decryptedToken=decryptToken(result[0].enc_pwd_reset_token);
 
                        let fullToken=`${token}+${result[0].pwd_reset_token_timestamp}`;

                        if(matchToken(fullToken, decryptedToken)){

                            con.query(changePassword, err=>{

                                if(err){
                                    throw err;
                                }
    
                                res.sendStatus(201);
    
                            });

                        }else{
                            res.status(403);
                        }

                    }  else{
                        res.sendStatus(403);
                    }
                    
                }else{
                    res.sendStatus(403); 
                }
            }else{
                res.sendStatus(404);
            }
        })
    }
})
module.exports=router;
