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


server.get('/', (req, res) => {
  res.send(`<title>Receipt Tracker</title>
  <h1>Welcome to Receipt Tracker's Api</h1>
  
  <ul>Endpoints Login / Register
     <li> POST /api/register</li>
     <li> POST /api/login</li>
 
  
  </ul>
  
`)
})

  
  module.exports = server;

 
