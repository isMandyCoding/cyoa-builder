exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('email')
            .unique()
        table.string('password')
        table.string('firstName')
        table.string('lastName')
        table.string('username')
            .unique()
        table.integer('votes')
            .defaultsTo(0)
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
};
