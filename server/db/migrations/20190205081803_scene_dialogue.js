exports.up = function (knex, Promise) {
    return knex.schema.createTable('scene_dialogue', table => {
        table.increments();
        table.integer('scene_id')
            .notNullable()
            .references('id')
            .inTable('route_scenes')
            .onDelete('CASCADE')
            .index();
        table.text('content')
        table.integer('sequence_number')
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('scene_dialogue')
};
