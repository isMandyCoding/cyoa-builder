exports.up = function (knex, Promise) {
    return knex.schema.createTable('adventures', table => {
        table.increments();
        table.string('title')
        table.text('description')
        table.text('adv_img_url')
        table.integer('adv_votes')
            .defaultsTo(0)
        table.integer('adv_downvotes')
            .defaultsTo(0)
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('adventures')
};
