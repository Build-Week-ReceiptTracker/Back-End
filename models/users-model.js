const db = require('../config/dbConfig');

module.exports = {
    register,
    login,
    getUser
};

function register(user) {
    return db('users')
        .insert(user);
};

function login(username) {
    return db('users')
        .where({ username })
        .first();
};



function getUser(username) {
    return db('users')
        .where({ username })
        .first();
};