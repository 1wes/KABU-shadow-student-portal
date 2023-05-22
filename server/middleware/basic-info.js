const tokenVerifier= require("./auth");
const express=require('express');
const router=express();
const con=require('../database');

router.get('/basicInfo', tokenVerifier, (req, res)=>{

    switch(statusCode){

        case 200:

            let getUsername=`SELECT * FROM students WHERE reg_no=?`;
            
            con.query(getUsername, tokenInfo.reg_no.reg_no, (err, result)=>{

                if(err){

                    console.log(err);
                }

                let UserInfo={
                    reg_no:tokenInfo.reg_no.reg_no,
                    username:`${result[0].surname} ${result[0].first_name} ${result[0].last_name}`,
                    id:result[0].id_no,
                    gender:result[0].gender,
                    address:result[0].address,
                    email:result[0].email,
                    dob:result[0].dob,
                    campus:result[0].campus
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