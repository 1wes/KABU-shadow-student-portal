const express=require('express');
const cors=require('cors');
const mysql=require('mysql');

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
    // let userDetails=req.body;
    let user_data={
        reg_no:req.body.reg_no,
        password:req.body.password
    }

    // insert the details into the database
    let insert_sql="INSERT INTO students SET ?";

    let query=db_conn.query(insert_sql, user_data, (err, result)=>{

        if(err){
            throw err
        }

        console.log(`Check out the result object: ${result}`)
    })

})

app.get("/server/intro", (req, res)=>{
    const status=res.status(200);

    status.send("This was sent from the back-end ..Node via the express web framework");
});

app.listen(port, ()=>{
    console.log(`The server is listening at port ${port}`);
});

