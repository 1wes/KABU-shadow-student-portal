const express=require('express');
const router=express.Router();
const con=require('./database.js');
const bcrypt=require('bcrypt');
const comparePassword=require('./utils/passwordMatch');

router.post("/login", (req, res)=>{

    let {reg_no, password}=req.body;

    let sql_select=`SELECT * from students WHERE reg_no='${reg_no}'`;

    con.query(sql_select, async(err, result)=>{

        if (err){

            throw err
        }

        let passwordMatch=await comparePassword(password, result[0].password);

        if(!passwordMatch || result.length==0){
            
            res.send({success:false})
        }

        // if the user exists and password checks out
        
    });

});

module.exports=router;