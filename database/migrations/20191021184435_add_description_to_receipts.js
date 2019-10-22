
exports.up = function(knex,Promise) {
  return knex.schema.table('receipts', (t)=>{
      t.string('description',400)
  })
};

exports.down = function(knex,Promise) {
  return knex.schema.table('receipts', (t)=>{
      t.dropColumnIfExists('description')
  })
};
