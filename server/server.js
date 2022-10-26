const express=require('express');
const {port}= require('./env-config');
const app=express();
const login=require('./route');

app.use("/server/login", login);

app.listen(port, ()=>{
    console.log(`The server is listening at port ${port}`);
});
