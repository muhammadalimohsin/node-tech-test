import 'dotenv/config';
import Sequelize from 'sequelize';

const { CO_DB_HOST, CO_DB_USERNAME, CO_DB_PASSWORD, CO_DB_NAME } = process.env;

const commonDB = new Sequelize(CO_DB_NAME, CO_DB_USERNAME, CO_DB_PASSWORD, {
  host: CO_DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30 * 1000,
    idle: 300 * 1000
  }
});

global.__db_connections = {};
// global.__db_connections['commonDB'] = commonDB;

export default commonDB;
