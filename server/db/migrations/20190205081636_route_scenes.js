exports.up = function (knex, Promise) {
    return knex.schema.createTable('route_scenes', table => {
        table.increments();
        table.integer('route_id')
            .notNullable()
            .references('id')
            .inTable('adventure_routes')
            .onDelete('CASCADE')
            .index();
        table.text('scene_img_url')
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('route_scenes')
};
