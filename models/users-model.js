const db = require('../config/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findBy,
}


function find(){
   return db('users').select('id','email');
}
function findBy(filter){
   return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}
function findById(id){
    return db('users')
        .where({ id })
        .first();
}