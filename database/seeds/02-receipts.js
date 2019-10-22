
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('receipts').truncate().del()
    .then(function () {
      // Inserts seed entries
      return knex('receipts').insert([
        { date_of_transaction: '2019-10-21',amount_spent:'20.00',category:'Food',merchant:'Food Store',image:'',user_username:'test1',description:'Picked a few things for dinner'},
        { date_of_transaction: '2018-10-21',amount_spent:'30.00',category:'Entertainment',merchant:'Entertainment Store',image:'',user_username:'test1',description:'Monday Night Football at tavern'},
        { date_of_transaction: '2018-12-25',amount_spent:'40.00',category:'Fuel',merchant:'Fuel Store',image:'',user_username:'test2',description:'Gas for truck'},
        { date_of_transaction: '2019-10,20',amount_spent:'10.99',category:'Food',merchant:'Food Store',image:'',user_username:'test3'},
        { date_of_transaction: '2017-09-15',amount_spent:'12.85',category:'Food',merchant:'Food Store',image:'',user_username:'test2'},
        { date_of_transaction: '2016-05-12',amount_spent:'.98',category:'Other',merchant:'Other Store',image:'',user_username:'test3'},
        
      ]);
    });
};
