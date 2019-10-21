<<<<<<< HEAD
<<<<<<< HEAD
require('dotenv').config('./config/default')
const express = require('express')
=======
require('dotenv').config()
const server = require('./api/server')
<<<<<<< HEAD


const port = process.env.PORT
server.listen(port,()=>{
    console.log(`\n******  Api up on port:${port}  *****\n`)
})
=======
>>>>>>> a4fcef349f21d597ed2f4475a59df738b260a0ce
=======

require('dotenv').config('./config/default')
const express = require('express')

>>>>>>> 1f9fcfc9cd5ff2b82ebce8458a5f3eee99dff42a
const path = require('path')
const defaults = require('./config/default')
const server = require('./api/server')





if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    server.use(express.static(path.join(__dirname, 'client/build')));
    
    // Handle React routing, return all requests to React app
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}else{

    const port = defaults.port
    server.listen(port,()=>{
        console.log(`\n******  Api up on port:${port}  *****\n`)
    })
}
