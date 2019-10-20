const router = require('express').Router();
const db = require('../models/users-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password,10) // 2 ^ n
 user.password = hash

  db.add(user)
    .then(saved => {
    
      res.status(201).json({id:saved.id,username:saved.email});
    })
    .catch(error => {

      res.status(500).json({message:'cannot add the user',error});
    });
});

router.post('/login', (req, res) => {
  let { email , password } = req.body;

  db.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce token
        const token = generateToken(user);

        // add token to response
        res.status(200).json({
          message: `Welcome ${user.first_name}!`,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });

})
   function generateToken(user) {
     const payload = {
       username: user.email,
       subject: user.id,
       };
       const options = {
         expiresIn: '7d',
       };
       return jwt.sign(payload,secrets.jwtSecret,options)
   }
module.exports = router;