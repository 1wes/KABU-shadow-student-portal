require('dotenv').config();

process.env.NODE_ENV=='development' ? process.env.PORT=5000 : process.env.PORT=5500

module.exports={
    port:process.env.PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
}