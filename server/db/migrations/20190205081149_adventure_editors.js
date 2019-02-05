exports.up = function (knex, Promise) {
    return knex.schema.createTable('adventure_editors', table => {
        table.increments();
        table.integer('adventure_id')
            .notNullable()
            .references('id')
            .inTable('adventures')
            .onDelete('CASCADE')
            .index();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('adventure_editors')
};
