require ('dotenv/config');
const mysql = require('mysql2/promise');
const fs = require('fs');

const {
  LOCAL_DB_HOST,
  LOCAL_DB_PORT,
  LOCAL_DB_NAME,
  LOCAL_DB_USERNAME,
  LOCAL_DB_PASSWORD
} = process.env;

console.log({
  LOCAL_DB_HOST,
  LOCAL_DB_PORT,
  LOCAL_DB_NAME,
  LOCAL_DB_USERNAME,
  LOCAL_DB_PASSWORD
});

(async () => {
  const connection = await mysql.createConnection({
    host: LOCAL_DB_HOST,
    port: LOCAL_DB_PORT,
    user: LOCAL_DB_USERNAME,
    password: LOCAL_DB_PASSWORD,
    database: LOCAL_DB_NAME,
    localInfile: 1
    // infileStreamFactory: path => fs.createReadStream(path)
  });

  // GRANT FILE
  // ON technicalTestDB.*
  // TO root@localhost;


  connection.query(
    `LOAD DATA LOCAL INFILE '../seed/Categories.csv'
    INTO TABLE catagories
    FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '/n'
    IGNORE 1 ROWS;`
    // `CREATE DATABASE IF NOT EXISTS \`${LOCAL_DB_NAME}\`;`
  ).then(() => {
    console.log(`Data has been Loaded! 🚀 `);
  }).catch((err) => {
    console.log('Data Load Err ::: ', err);
  });
})();
