exports.up = function (knex, Promise) {
    return knex.schema.createTable('tags', table => {
        table.increments();
        table.text('tag_name')
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tags')
};
