exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 50)
                .notNullable()
                .unique();
            tbl.string('email', 100)
                .notNullable()
                .unique();
            tbl.string('password', 20)
                .notNullable();
        })
        .createTable('receipts', tbl => {
            tbl.increments();
            tbl.date('date_of_transaction')
                .notNullable()
            tbl.string('amount_spent')
                .notNullable();
            tbl.string('category', 100)
                .notNullable();
            tbl.string('merchant', 100)
                .notNullable();
            tbl.string('image', 255)
            tbl.string('user_username')
                .unsigned()
                .notNullable()
                .references('username')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return  knex.schema.dropTableIfExists('receipts'), knex.schema.dropTableIfExists('users') 
};