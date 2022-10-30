const express=require('express');
const {port}= require('./env-config');
const app=express();
const cors=require('cors');
const student=require('./login');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/student", student);

app.listen(port, ()=>{
    console.log(`The server is listening at port ${port}`);
});
