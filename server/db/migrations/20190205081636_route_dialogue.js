exports.up = function (knex, Promise) {
    return knex.schema.createTable('route_dialogue  ', table => {
        table.increments();
        table.integer('route_id')
            .notNullable()
            .references('id')
            .inTable('adventure_routes')
            .onDelete('CASCADE')
            .index();
        table.integer('sequence_number')
        table.text('content')
        table.boolean('isDecisionPoint')
            .defaultsTo(false)
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('route_dialogue    ')
};
