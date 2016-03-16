module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/dead_drop',
    migrations: {
      directory: './src/server/db/migrations'
    },
    seeds: {
      directory: './src/server/db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};


//knex migrate:latest --env development