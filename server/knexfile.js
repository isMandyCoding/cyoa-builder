module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: "cyoa-builder",
            host: "127.0.0.1",
            user: "postgres",
            password: "**********",
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
    },
};
