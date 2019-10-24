
exports.up = function(knex,Promise) {
  // return knex.schema.table('receipts', (t)=>{
  //     t.string('description',400)
  //     t.string('image_url').unique()
  // })
};

exports.down = function(knex,Promise) {
  // return knex.schema.table('receipts', (t)=>{
  //     t.dropColumn('description')
  //     t.dropColumn('image_url')

  // })
};
