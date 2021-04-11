import Sequelize from 'sequelize';

import * as files from './models';
const {
  LOCAL_DB_HOST,
  LOCAL_DB_NAME,
  LOCAL_DB_USERNAME,
  LOCAL_DB_PASSWORD
} = process.env;

let db = {};
const sequelize = new Sequelize(LOCAL_DB_NAME, LOCAL_DB_USERNAME, LOCAL_DB_PASSWORD, {
  host: LOCAL_DB_HOST,
  dialect: 'mysql',
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

Object.keys(files).forEach((fileName) => {
  const model = files[fileName](sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    console.log({ modelName });
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync();

export default db;
