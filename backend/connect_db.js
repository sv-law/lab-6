/**
 * Requiring this file will connect to the database and return the
 * Sequelize database connection object.
 */

const Sequelize = require('sequelize');

const dbConfig = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  // // here we are selecting mysql as the database type we will be using
  // now postgres
  dialect: 'postgres'
};

// Here we connect to the database
const db = new Sequelize(
  'development_db',
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  dbConfig);

module.exports = db;
