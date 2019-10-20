const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Login/Signup Router
const authRouter = require('../auth/auth-users')
//Receipts router
const receipts = require('../routes/receipts-router')
//Restricted routes router
const restricted = require('../auth/restricted')


// Create server
const server = express()

// Add middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//Add routes
server.use('/api/auth',authRouter);
server.use('/api/receipts',restricted,receipts)
//Test server

server.get('/',(req,res)=>{
    res.status(200).send(`<h1>Welcome to Receipt Tracker Api</h1>`)
});

  
  module.exports = server;

 