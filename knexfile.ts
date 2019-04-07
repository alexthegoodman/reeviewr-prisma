// Update with your config settings.
const config = require("config");
// import * as config from config;

module.exports = {
  test: {
    client: "mysql",
    // connection: config.get("databaseUrl"),
    connection: config.get("databaseConnection"),
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/test",
    },
  },
  development: {
    client: "mysql",
    // connection: config.get("databaseUrl"),
    connection: config.get("databaseConnection"),
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/development",
    },
  },
  production: {
    client: "mysql",
    // connection: config.get("databaseUrl"),
    connection: config.get("databaseConnection"),
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/production",
    },
  },
};
