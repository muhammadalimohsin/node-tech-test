require("dotenv/config")
const { AUTO_ORDER_DB_USER, AUTO_ORDER_DB_PASS, AUTO_ORDER_DB_NAME, AUTO_ORDER_DB_HOST, CONN_POOL_SIZE } = process.env
module.exports = {
  development: {
    username: AUTO_ORDER_DB_USER,
    password: AUTO_ORDER_DB_PASS,
    database: AUTO_ORDER_DB_NAME,
    host: AUTO_ORDER_DB_HOST,
    dialect: "mysql",
    pool: {
      max: parseInt(CONN_POOL_SIZE) || 5,
      min: 0,
      acquire: 600000,
      idle: 5000
    }
  },
  production: {
    username: AUTO_ORDER_DB_USER,
    password: AUTO_ORDER_DB_PASS,
    database: AUTO_ORDER_DB_NAME,
    host: AUTO_ORDER_DB_HOST,
    dialect: "mysql",
    pool: {
      max: parseInt(CONN_POOL_SIZE) || 5,
      min: 0,
      acquire: 600000,
      idle: 5000
    }
  }
}
