const express=require('express');
const app=express();
const router=express.Router();
const con=require('./database.js');
const bcrypt=require('bcrypt');

router.post("/login", (req, res)=>{

    let reg_no=req.body.reg_no;

    let password=req.body.password;

    let sql_select=`SELECT * from students WHERE reg_no='${reg_no}'`;

    con.query(sql_select, (err, result)=>{

        if (err){

            throw err
        }

        // ensure the student exists
        if(result.length==0){
            res.send(false)
        }else{
            bcrypt.compare(password, result[0].password, (err, result)=>{

                if(err){
                    throw err
                }

                res.send(result);
            })
        }
    });

});

module.exports=router;