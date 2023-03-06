const express=require('express');
const {port, node_env}= require('./env-config');
const app=express();
const cors=require('cors');
const cookieParser=require('cookie-parser');
const login=require('./login');
const auth=require('./middleware/auth');
const forgotPassword=require('./middleware/reset-password');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());

app.use("/student", login);
app.use("/student", auth)
app.use("/student", forgotPassword);

app.listen(port, ()=>{
    console.log(node_env=='production' || node_env=='development' ? `The server is running at port ${port}` : `Please select your Node environment`);
});
