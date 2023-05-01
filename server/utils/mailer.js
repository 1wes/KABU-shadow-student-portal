const nodemailer=require('nodemailer');
const{email, client_id, client_secret, refresh_token, access_token}=require('../env-config');

const transporter=nodemailer.createTransport({
    host:'smtp.gmail.com', 
    auth:{
        user:email,
        type:'OAuth2',
        clientId:client_id,
        clientSecret:client_secret,
        refreshToken:refresh_token,
        accessToken:access_token,
    }
});

module.exports=transporter;