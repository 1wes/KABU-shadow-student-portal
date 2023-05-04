require('dotenv').config();
const crypto=require('crypto')
const {NODE_ENV,DB_HOST, DB_USER,DB_PASSWORD,DB_NAME,TOKEN_SECRET_KEY,EMAIL_SENDER,
    CLIENT_ID,CLIENT_SECRET,ACCESS_TOKEN,REFRESH_TOKEN,PASSWORD_RESET_LINK,ALGORITHM}=process.env;

var {PORT, SECURITY_KEY,IV}=process.env;

switch(NODE_ENV){

    case 'development':

        let securityKey=crypto.randomBytes(32);

        let iv=crypto.randomBytes(16);

        SECURITY_KEY=securityKey;

        IV=iv;

        PORT=5000;

        break;
    
    case 'production':

        PORT=5500;

        break;
}

NODE_ENV=='development' ? PORT=5000 : PORT=5500

module.exports={
    port:PORT,
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_NAME,
    node_env:NODE_ENV,
    token_secret_key:TOKEN_SECRET_KEY,
    email:EMAIL_SENDER,
    client_id:CLIENT_ID,
    client_secret:CLIENT_SECRET,
    access_token:ACCESS_TOKEN,
    refresh_token:REFRESH_TOKEN,
    pwd_reset_link:PASSWORD_RESET_LINK,
    algorithm:ALGORITHM,
    security_key:SECURITY_KEY,
    iv:IV
}