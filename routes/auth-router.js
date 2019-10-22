const router = require('express').Router();
const db = require('../models/users-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const secrets = require('../config/secrets');

// for endpoints beginning with /api
router.post('/register', (req, res) => {
  let user = req.body;
  console.log(user)
  const hash = bcrypt.hashSync(user.password,10); // 2 ^ n
 user.password = hash

  db.add(user)
 
    .then(saved =>{
  
    res.status(201).json(saved)})
  
    .catch(error => {
  
      res.status(500).json({ message: 'cannot add the user', error });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

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
        res.status(420).json({ message: 'Go smoke a bowl and stop hitting my api with your bs requests' });
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
