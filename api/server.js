const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Login/Signup Router

const nonAuth = require('../routes/login-signup')
//Receipts router
const receipts = require('../routes/receipts-router')
//Restricted routes router
const authenticate = require('../auth/authenticate')


// Create server
const server = express()

// Add middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//Add routes
server.use('/api',nonAuth);
server.use('/api/auth',receipts)
//Test server

server.get('/',(req,res)=>{
    res.status(200).send(`<h1>Welcome to Receipt Tracker Api</h1>`)
});

  
  module.exports = server;

 