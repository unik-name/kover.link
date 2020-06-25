import env from "./server/env";

module.exports = {
  production: {
    client: "postgresql",
    connection: {
      host: env.POSTGRESQL_ADDON_HOST,
      database: env.POSTGRESQL_ADDON_DB,
      user: env.POSTGRESQL_ADDON_USER,
      port: env.POSTGRESQL_ADDON_PORT,
      password: env.POSTGRESQL_ADDON_PASSWORD,
      ssl: env.DB_SSL,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "server/migrations"
    }
  }
};
