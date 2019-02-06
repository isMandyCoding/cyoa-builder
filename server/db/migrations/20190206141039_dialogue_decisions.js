exports.up = function (knex, Promise) {
    return knex.schema.createTable('dialogue_decisions', table => {
        table.increments();
        table.text('label')
        table.integer('route_id')
            .notNullable()
            .references('id')
            .inTable('adventure_routes')
            .onDelete('CASCADE')
            .index();
        table.integer('dialogue_id')
            .notNullable()
            .references('id')
            .inTable('scene_dialogue')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('dialogue_decisions')
};
