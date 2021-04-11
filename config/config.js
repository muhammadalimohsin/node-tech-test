const {
  NODE_ENV,
  LOCAL_DB_HOST,
  LOCAL_DB_NAME,
  LOCAL_DB_USERNAME,
  LOCAL_DB_PASSWORD,
  PROD_DB_NAME,
  PROD_DB_USERNAME,
  PROD_DB_PASSWORD
} = process.env

const isProd = () => NODE_ENV === 'production';

// export default {
//   DB_HOST: isProd() ? PROD_DB_NAME : LOCAL_DB_HOST,
//   DB_NAME: isProd() ? PROD_DB_NAME : LOCAL_DB_NAME,
//   DB_USERNAME: isProd() ? PROD_DB_USERNAME : LOCAL_DB_USERNAME,
//   DB_PASSWORD: isProd() ? PROD_DB_PASSWORD : LOCAL_DB_PASSWORD
// };
module.exports = {
  development: {
    database: LOCAL_DB_NAME,
    username: LOCAL_DB_USERNAME,
    password: LOCAL_DB_PASSWORD,
    dialect: "mysql",
  }
};
