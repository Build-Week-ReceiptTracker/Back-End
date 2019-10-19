const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router');
const restricted = require('../auth/auth-middleware').restricted;
const receiptRouter = require('../receipts/receipts-router');
const server = express();

const logger = (req, res, next) => {
    console.log(`${req.method} request was made to ${req.url}`)
    next();
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/receipts',receiptRouter)
server.get(('/'), (req,res)=>{
  res.status(201).send(`<h1>Welcome to Receipt Tracker's API!!!!!!</h1>`)
})
module.exports = server;