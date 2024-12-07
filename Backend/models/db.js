const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
      dialect: 'mysql',
      logging : false,
  }
  );



  sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Database connection error:', err));
  module.exports=sequelize;