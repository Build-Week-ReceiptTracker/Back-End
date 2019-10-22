const db = require('../config/dbConfig');

module.exports = {
   
     find,
     findBy,
     findById,
     add,
     updateEmail,
     updatePassword
};

function find() {
    return db('users')
      .then(users => users)
  }
  
  function findBy(filter) {
    console.log(filter)
    return db('users')
      .where(filter)
  }
  
  function findById(id) {
    return db('users')
    .select('email')
      .where({ id:id})
      .first()
      .then(user => {return user})
  }
  
  function add(userData) {
    return db('users')
      .insert(userData, "id")
      .then(userIdArr => findById(userIdArr[0]))
  }


  function updateEmail(id,email) {
    return db('users')
        .where({ id })
        
        .update({'email':email})
    };
    function updatePassword(id,password) {
      return db('users')
          .where({ id })
          
          .update({'password':password})
      };