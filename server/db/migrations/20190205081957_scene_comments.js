exports.up = function (knex, Promise) {
    return knex.schema.createTable('scene_comments', table => {
        table.increments();
        table.integer('scene_id')
            .notNullable()
            .references('id')
            .inTable('route_scenes')
            .onDelete('CASCADE')
            .index();
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
        table.text('content')
        table.integer('votes')
            .defaultsTo(0)
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('scene_comments')
};
