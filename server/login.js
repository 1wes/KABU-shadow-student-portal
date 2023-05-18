const express=require('express');
const router=express.Router();
const con=require('./database.js');
const {comparePassword}=require('./utils/passwordOps.js');
const generateToken=require('./web-tokens/generateToken');

router.post("/login", (req, res)=>{

    let {reg_no, password}=req.body;

    let sql_select=`SELECT * from students WHERE reg_no='${reg_no}'`;

    con.query(sql_select, async(err, result)=>{

        if (err){

            throw err
        }

        if(result.length!=0){

            var hashedPassword=result[0].password;

            let passwordMatch=await comparePassword(password, hashedPassword);

            if(!passwordMatch){
            
                return res.status(401).send("Unauthorized")
            }

            // if the user exists and password checks out
            let token=generateToken({reg_no:result[0].reg_no});

            res.cookie("authorizationCookie", token, {
                httpOnly:true,
                sameSite:'lax',
                secure:true
            });

            return res.status(201).json({
                success:true,
                responseData:{
                // token:token,
                reg_no:result[0].reg_no
                }
            })
        }else{
            return res.status(403).send("Forbidden");
        }

    });

});

module.exports=router;