const express=require('express');
const {port}= require('./env-config');
const app=express();
const student=require('./login');

app.use("/student", student);

app.listen(port, ()=>{
    console.log(`The server is listening at port ${port}`);
});
