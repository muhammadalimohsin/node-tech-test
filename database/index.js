import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import * as files from './models/creditCards';
const basename = path.basename(__filename);
// import { MYSQL } from `../../environment/${process.env.STAGE}`;

// const MYSQL = {
//   USERNAME: '',
//   PASSWORD: '12345678',
//   HOST: 'localhost',
//   DIALECT: 'postgres  ',
//   DATABASE: 'Sales-Support-AO'
// };

// const sequelize = new Sequelize(MYSQL.DATABASE, MYSQL.USERNAME, MYSQL.PASSWORD, {
//   // host: MYSQL.HOST,
//   dialect: MYSQL.DIALECT,
//   // port: MYSQL.PORT,
//   dialectOptions: {
//     connectTimeout: 50000
//   },
//   pool: {
//     max: 150,
//     min: 0,
//     idle: 10000
//   },
//   define: {
//     timestamps: true
//   }
// });


let db = {};
const sequelize = new Sequelize('Sales-Support-AO', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 150,
    min: 0,
    idle: 10000
  }
});

Object.keys(files).forEach((fileName) => {
  console.log({ files, fileName });
  console.log(files[fileName]);
  const model = files[fileName](sequelize, Sequelize.DataTypes);
  console.log({ model });
  console.log({ modelName: model.name });
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync();

export default db;
