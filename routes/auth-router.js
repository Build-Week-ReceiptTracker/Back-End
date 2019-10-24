const router = require('express').Router();
const db = require('../models/users-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const secrets = require('../config/secrets');

// for endpoints beginning with /api
router.post('/register', (req, res) => {
  let user = req.body.email;req.body.username
  // console.log(user)
  const hash = bcrypt.hashSync(user.password,10); // 2 ^ n
 user.password = hash



    .then(saved =>{
     if(saved){
    res.status(201).json({message:`${saved.email} added`})
} else {
  res.status(404).json({message:"Please check username and email"})
}})
    .catch(error => {
  
      res.status(500).json({ message: 'cannot add the user', error });
    });
});
router.put('/username/update', (req, res) => {
  const username = req.params.username;
  const changes = req.body;


  if(changes) {
      Receipts.updateReceipt(username, changes)
          .then(count => {
              if(count){ 
              res.status(202).json(count);
               }else{ res.status(404).json({ error: "Please enter a valid password" })
          }})
          .catch(err => res.status(500).json({ error: err }));
  } else {
      res.status(400).json({ error: "Please provide all required fields." });
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  
  if(!username || !password){
    
    res.status(403).json({message:'Please enter login information'}) 
  }
  db.findBy({ username })
    .first()
    .then(user => {
  
       if (user && bcrypt.compareSync(password, user.password)) {
        // produce token
        const token = generateToken(user);

        // add token to response
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(404).json({ message: 'User does not exist' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
router.get("/logout",(req,res) =>{
  if(req.session){
    req.session.destroy(err =>{
      res
        .status(200)
        .json({
          message:
          'Logout successfull'
        })
    })
  }else {
    res.status(200).json({message:'Not logged in'})
  }
})


function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
    role: user.role,
  };
  const options = {
    expiresIn: '8h',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}


module.exports = router;
