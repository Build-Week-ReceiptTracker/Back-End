// Update with your config settings.

module.exports = {
<<<<<<< HEAD



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
    
  
  

=======
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


>>>>>>> Mike_Harley
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
<<<<<<< HEAD
}
}


=======

};
>>>>>>> Mike_Harley