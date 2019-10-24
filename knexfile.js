// Update with your config settings.

module.exports = {


    development: {
      client: 'sqlite3',
      connection: { filename: './database/receipttrack.db3' },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations',
        tableName: 'dbmigrations',
      },
      seeds: { directory: './database/seeds' },
    },
  



  staging: {
    client: 'pg',
    connection: {
       uri :process.env.DATABASE_URL,
      database: 'postgres',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,

  
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  }

}
