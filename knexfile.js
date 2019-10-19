// Update with your config settings.

module.exports = {



    development: {
      client: 'pg',
      connection: process.env.DB_URL,
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations'
      },
      pool: {
        min:2,
        max:10
      },
      
      seeds: {
        directory: './data/seeds'
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
        },
      },
    
  
  

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
}


