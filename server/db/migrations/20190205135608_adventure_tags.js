exports.up = function (knex, Promise) {
    return knex.schema.createTable('adventure_tags', table => {
        table.increments();
        table.integer('adventure_id')
            .notNullable()
            .references('id')
            .inTable('adventures')
            .onDelete('CASCADE')
            .index();
        table.integer('tag_id')
            .notNullable()
            .references('id')
            .inTable('tags')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('adventure_tags')
};
