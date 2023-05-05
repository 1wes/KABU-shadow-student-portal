const express=require('express');
const app=express();
const router=express.Router();
const {decryptToken, encryptToken}=require('../utils/resetTokenOps');
const con=require('../database');
const tokenVerifier=require('./auth');
const { token_validity } = require('../env-config');
const hashPassword=require('../utils/hashPassword');

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

                        console.log('hashed password:'+hashedPassword);

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
