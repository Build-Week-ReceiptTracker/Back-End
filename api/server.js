const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//restricted routes
const authRouter = require('../routes/auth-router')
const authenticate = require('../auth/authenticate')
const receipts = require('../routes/receipts-router')



// Create server
const server = express()

// Add middleware

const logger = (req, res, next) => {
  console.log(`${req.method} request was made to ${req.url}`)
  next();
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

//Add routes
server.use('/api',authRouter);
server.use('/api/auth/receipts',authenticate,receipts)
//Test server

server.get('/',(req,res)=>{
    res.status(200).send(`<h1>Welcome to Receipt Tracker Api</h1>`)
});

  
  module.exports = server;

 
