const express=require('express');
const app=express();
const router=express.Router();
const {decryptToken, encryptToken}=require('../utils/resetTokenOps');
const con=require('../database');
const tokenVerifier=require('./auth');

app.use(tokenVerifier)

router.post('/login/forgotPassword/resetPassword', tokenVerifier, (req, res)=>{

    if(statusCode==200){
        let referringURL=req.headers.referer;

        let userInfo=referringURL.split('?')[1].split('=')

        let user=userInfo[1].split('&')[0];

        let token=userInfo[2];

        let getTokeninfo=`SELECT * from students where pwd_reset_token='${token}'`;

        con.query(getTokeninfo, (err, result)=>{

            if(err){
                throw err;
            }

            result?
        
            // match the token with the retrieved reg number;
            result[0].reg_no==user?
            console.log("match"):
            res.sendStatus(403):res.sendStatus(404);

        })
    }
})
module.exports=router;
