const db = require('../config/dbConfig');

module.exports = {
    getReceipts,
    postReceipt,
    deleteReceipt,
    updateReceipt,
    getReceiptByID
};

function getReceipts(username) {
    return db('receipts as r')
        .join('users as u', 'r.user_username', 'u.username')
        .select('r.id', 'r.date_of_transaction', 'r.user_username','r.amount_spent', 'r.category', 'r.merchant','r.image_url','r.description')
        .where({ user_username : username });
};
function getReceiptByID(id) {
    return db('receipts as r')
          .select('r.id', 'r.date_of_transaction','r.user_username', 'r.amount_spent', 'r.category', 'r.merchant','r.image_url','r.description')
           .where({ id })
           .first()
           .then(receipt => receipt)
        //   .join('users as u','r.user_username','u.username')
   
          
        }   

function postReceipt(receipt) {
    

    return db('receipts')
        .insert(receipt,"id");
};

function deleteReceipt(id,user) {
    return db('receipts')
        .select('id','user_username')
        .where({ id })
        .delete()
};

function updateReceipt(id, changes) {
    return db('receipts')
        .where({ id })
        .update(changes,"id")
    };