const tokenVerifier= require("./auth");
const express=require('express');
const router=express();
const con=require('../database');

router.get('/loginAuth', tokenVerifier, (req, res)=>{

    switch(statusCode){

        case 200:

            let getUsername=`SELECT * FROM students WHERE reg_no=?`;
            
            con.query(getUsername, tokenInfo.reg_no.reg_no, (err, result)=>{

                if(err){

                    console.log(err);
                }

                let UserInfo={
                    reg_no:tokenInfo.reg_no.reg_no,
                    username:`${result[0].surname} ${result[0].first_name} ${result[0].last_name}`
                }

                res.send(UserInfo)
            })

            break;
        
        case 401:

            res.sendStatus(statusCode);

            break;

        case 403:

            res.sendStatus(statusCode);

            break;
    }
});
module.exports=router;