const db = require('../config/dbConfig');

module.exports = {
    getReceipts,
    postReceipt,
    deleteReceipt,
    updateReceipt
};

function getReceipts(username) {
    return db('receipts as r')
        .join('users as u', 'r.user_username', 'u.username')
        .select('r.id', 'r.date_of_transaction', 'r.amount_spent', 'r.category', 'r.merchant')
        .where({ user_username : username });
};

function postReceipt(receipt) {
    return db('receipts')
        .insert(receipt,"id");
};

function deleteReceipt(id) {
    return db('receipts')
        .where({ id })
        .delete()
};

function updateReceipt(id, changes) {
    return db('receipts')
        .where({ id })
        .update(changes)
    };