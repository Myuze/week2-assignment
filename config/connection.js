const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else if(process.env.BLUEHOST) {
  sequelize = new Sequelize(
    process.env.DB_CPNL_NAME,
    process.env.DB_CPNL_USER,
    process.env.DB_CPNL,
    {
      host: '162.241.24.233',
      dialect: 'mysql',
      port: 3306,
    }
  );
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

module.exports = sequelize;
