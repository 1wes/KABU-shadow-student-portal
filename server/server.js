const express=require('express');
const {port, node_env}= require('./env-config');
const app=express();
const cors=require('cors');
const login=require('./login');
const auth=require('./middleware/auth');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/student", login);
app.use("/student", auth)

app.listen(port, ()=>{
    console.log(node_env=='production' || node_env=='development' ? `The server is running at port ${port}` : `Please select your Node environment`);
});
