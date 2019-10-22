
exports.up = function(knex,Promise) {
  return knex.schema.table('receipts', (t)=>{
      t.string('description',400)
      t.url('image_url').unique()
  })
};

exports.down = function(knex,Promise) {
  return knex.schema.table('receipts', (t)=>{
      t.dropColumnIfExists('description')
      t.dropColumnIfExists('image_url')

  })
};
