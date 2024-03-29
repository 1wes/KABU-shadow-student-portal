const express=require('express');
const {port, node_env}= require('./env-config');
const app=express();
const cors=require('cors');
const cookieParser=require('cookie-parser');
const login=require('./login');
const forgotPassword=require('./middleware/forgot-password');
const resetPassword=require('./middleware/resetPassword');
const loginAuth=require('./middleware/basic-info');
const logoutUser=require('./middleware/logout');
const checkCookie=require('./middleware/check-cookie');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());

app.use("/student", login);
app.use("/student", forgotPassword);
app.use("/student", resetPassword);
app.use("/student", loginAuth);
app.use("/student", logoutUser);
app.use("/student", checkCookie);

app.listen(port, ()=>{
    console.log(node_env=='production' || node_env=='development' ? `The server is running at port ${port}` : `Please select your Node environment`);
});
