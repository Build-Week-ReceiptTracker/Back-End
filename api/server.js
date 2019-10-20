const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-users')


// Create server
const server = express()

// Add middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//Add routes
server.use('/api/auth',authRouter);

//Test server

server.get('/',(req,res)=>{
    res.status(200).json({message:`It's Working!!!!!`})
});

  
  module.exports = server;

 
