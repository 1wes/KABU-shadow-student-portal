const mysql=require('mysql');
const {host, user, password, database}= require('./env-config');

// create a connection to the databse
const db_conn=mysql.createConnection({
    host:host,
    user:user,
    password:password,
    database:database
});

// make the connection
db_conn.connect(err=>{
    if (err){
        throw err
    }

    console.log("Database connection established");
});


module.exports=db_conn;