const {config} = require('dotenv');

config();

const PORT = process.env.PORT || 3000
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || '1234'
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = process.env.DB_PORT || 'api'
const DB_DATABASE = process.env.DB_DATABASE || 3306

module.exports = {
    PORT,
    DB_USER,
    DP_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_DATABASE

}
