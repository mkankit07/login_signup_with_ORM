// Update with your config settings.
require ("dotenv").config({path:`${__dirname}/.env`})
module.exports = {

  development: {
    client: "mysql",
    connection: {database:process.env.db_name,
      user:process.env.db_user,
      password:process.env.db_password


    }
  },

  staging: {
    client: 'mysql',
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
      tableName: 'knex_migrations',
      directory:'./migrations'
    }
  },

  production: {
    client: 'mysql',
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
      tableName: 'knex_migrations',
      directory:'./migrations'
    }
  }

};
