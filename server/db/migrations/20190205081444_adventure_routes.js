exports.up = function (knex, Promise) {
    return knex.schema.createTable('adventure_routes', table => {
        table.increments();
        table.string('route_title')
        table.integer('adventure_id')
            .notNullable()
            .references('id')
            .inTable('adventures')
            .onDelete('CASCADE')
            .index();
        table.integer('route_votes')
            .defaultsTo(0)
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('adventure_routes')
};
