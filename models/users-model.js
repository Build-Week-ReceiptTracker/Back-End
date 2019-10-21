const db = require('../config/dbConfig');

module.exports = {
   
     find,
     findBy,
     findById,
     add,
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
      .where({ id })
      .first()
      .then(user => user)
  }
  
  function add(userData) {
    return db('users')
      .insert(userData, "id")
      .then(userIdArr => findById(userIdArr[0]))
  }
  