const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const bcrypt=require('bcrypt');

const app=express();

const port=5000;

// use json to parse the incoming requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// create a connection to the databse
const db_conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'KABU_shadow_portal'
});

// make the connection
db_conn.connect(err=>{
    if (err){
        throw err
    }

    console.log("Mysql has successfully connected....");
});

// // to be replaced by actual data from the database;
// const reg_no='Wes';

// const password="Okemwa";

app.post("/server/intro", (req, res)=>{

    bcrypt.genSalt(10, (err, salt)=>{

        if (err){
            throw err
        }
        

        bcrypt.hash(req.body.password, salt, (err, hash)=>{

            if(err){
                throw err
            }

            let login_info={
                reg_no:req.body.reg_no,
                password:hash
            }

            let insert_sql="INSERT INTO students SET ?";

            db_conn.query(insert_sql, login_info, (err, result)=>{

                if(err){

                    throw err
                }

                console.log(result);
            })
        })
    });
});

app.get("/server/intro", (req, res)=>{
    const status=res.status(200);

    status.send("This was sent from the back-end ..Node via the express web framework");
});

app.listen(port, ()=>{
    console.log(`The server is listening at port ${port}`);
});

