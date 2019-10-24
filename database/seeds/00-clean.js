
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate().del()

}
