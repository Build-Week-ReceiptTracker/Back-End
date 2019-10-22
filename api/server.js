const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//restricted routes
const authRouter = require('../routes/auth-router')
const authenticate = require('../auth/authenticate')
const receipts = require('../routes/receipts-router')
const updateUser = require('../routes/updateUsers-router')


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
server.use('/api/auth/update',authenticate,updateUser)
server.use('/api/auth/delete',authenticate,updateUser)
//Test server


server.get('/', (req, res) => {
  res.send(`<title>Receipt Tracker</title>
  <h1>Welcome to Receipt Tracker's Api</h1>
  
 <ul> <h2>Endpoints</h2>
      <h3> Login / Register</h3>
     <li> POST /api/register</li>
     <li> POST /api/login</li>
         
           <h3>Must Be Logged In</h3>
     <li> POST /api/auth/receipts/add</li>
     <li> GET /api/auth/receipts/all</li>
 
  
  </ul>
  
`)
})

  
  module.exports = server;

 
