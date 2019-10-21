// Update with your config settings.

module.exports = {
  // development: {
  //   client: 'sqlite3',
  //   connection: { filename: './database/receipttrack.db3' },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './database/migrations',
  //     tableName: 'dbmigrations',
  //   },
  //   seeds: { directory: './database/seeds' },
  // },
  // development: {
  //   client: 'pg',
  //   connection: {
  //     host:'ec2-54-83-33-14.compute-1.amazonaws.com',
  //     database:'d8tt46hfandbn9',
  //     user:'vvjedexpmooagk',
  //     password:'61486eef75fe3c214aed502ef6aad9412436e76f31cfd6170ba8c06352f4a064',
  //     ssl:true
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './database/migrations',
  //     tableName: 'dbmigrations',
  //   },
  //   seeds: { directory: './database/seeds' },
  // },


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
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL,
 
    },
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

};
