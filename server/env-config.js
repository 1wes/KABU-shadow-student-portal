require('dotenv').config();

switch(process.env.NODE_ENV){

    case 'development':

        process.env.PORT=5000;

        break;
    
    case 'production':

        process.env.PORT=5500;

        break;

}

process.env.NODE_ENV=='development' ? process.env.PORT=5000 : process.env.PORT=5500

module.exports={
    port:process.env.PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    node_env:process.env.NODE_ENV,
    token_secret_key:process.env.TOKEN_SECRET_KEY,
    email:process.env.EMAIL_SENDER,
    sender_password:process.env.SENDER_PASSWORD
}