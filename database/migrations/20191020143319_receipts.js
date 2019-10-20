
exports.up = function(knex) {
  return knex.schema
  .createTable('receipts', tbl => {
    tbl.increments();
    tbl.string('date')
        .notNullable()
    tbl.integer('amount_spent')
        .notNullable();

    tbl.string('merchant', 100)
        .notNullable();
    tbl.string('image', 255)
    tbl.string('user_email')
        .unsigned()
        .notNullable()
        .references('email')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('receipts')
};
