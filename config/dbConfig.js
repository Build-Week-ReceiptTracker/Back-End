require('dotenv').config()
const knex = require('knex');

const knexConfig = require('../knexfile');


const envir = process.env.DB_URL || 'development' 
module.exports = knex(knexConfig[envir]);