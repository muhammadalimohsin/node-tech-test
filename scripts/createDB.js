require ('dotenv/config');
const mysql = require('mysql2/promise');

const {
  LOCAL_DB_HOST,
  LOCAL_DB_PORT,
  LOCAL_DB_NAME,
  LOCAL_DB_USERNAME,
  LOCAL_DB_PASSWORD
} = process.env;

(async () => {
  const connection = await mysql.createConnection({ host: LOCAL_DB_HOST, port: LOCAL_DB_PORT, user: LOCAL_DB_USERNAME, password: LOCAL_DB_PASSWORD });
  connection.query(`CREATE DATABASE IF NOT EXISTS \`${LOCAL_DB_NAME}\`;`)
  .then(() => {
    console.log(`Database ${LOCAL_DB_NAME} has been Created! 🚀 `);
  });
})();
