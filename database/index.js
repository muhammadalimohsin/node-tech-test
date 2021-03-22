import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import * as files from './models/purchasingCredentials';
const basename = path.basename(__filename);
// import { MYSQL } from `../../environment/${process.env.STAGE}`;
const MYSQL = {
  USERNAME: 'root',
  PASSWORD: '12345678',
  HOST: 'localhost',
  PORT: '50393',
  DIALECT: 'postgres',
  DATABASE: 'fba_support_development_new'
};

let db = {};
const sequelize = new Sequelize(MYSQL.DATABASE, MYSQL.USERNAME, MYSQL.PASSWORD, {
  // host: MYSQL.HOST,
  dialect: MYSQL.DIALECT,
  // port: MYSQL.PORT,
  dialectOptions: {
    connectTimeout: 50000
  },
  pool: {
    max: 150,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: true
  }
});
// fs
//   .readdirSync(__dirname)
//   .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file !== 'sync.js') && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
//     db[model.name] = model;
//   });

Object.keys(files).forEach((fileName) => {
  console.log({ files, fileName });
  console.log(files[fileName]);
  const model = files[fileName](sequelize, Sequelize.DataTypes);
  console.log({ model });
  // db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
