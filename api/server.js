const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mw = require('../middleware/server-middleware')
//Creates server
const server = express()

// Global Middleware
server.use(mw.logger)
server.use(express.json())


server.use(helmet())
server.use(cors())


// Routes/Endpoints



// Server Landing Page
server.get('/', (req,res) =>{
    res.status(201).send('<a style="text-align":center"><h1>Welcome to The Receipt Tracker Back-End</h1></a>')
})


module.exports = server