
const knex = require('knex');

const knexConfig = require('../knexfile.js');

const envir = process.env.DB_URL || 'development' 
module.exports = knex(knexConfig[envir]);