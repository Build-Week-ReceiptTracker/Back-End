require('dotenv').config()
const server = require('./api/server')
<<<<<<< HEAD


const port = process.env.PORT
server.listen(port,()=>{
    console.log(`\n******  Api up on port:${port}  *****\n`)
})
=======
const path = require('path')

const port = process.env.PORT


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    server.use(express.static(path.join(__dirname, 'client/build')));
    
    // Handle React routing, return all requests to React app
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}else{

    server.listen(port,()=>{
        console.log(`\n******  Api up on port:${port}  *****\n`)
    })
}
>>>>>>> Mike_Harley
