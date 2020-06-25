import knex from "knex";

import env from "./env";

const db = knex({
  client: "postgres",
  connection: {
    host: env.POSTGRESQL_ADDON_HOST,
    port: env.POSTGRESQL_ADDON_PORT,
    database: env.POSTGRESQL_ADDON_DB,
    user: env.POSTGRESQL_ADDON_USER,
    password: env.POSTGRESQL_ADDON_PASSWORD,
    ssl: env.DB_SSL,
    pool: {
      min: env.DB_POOL_MIN,
      max: env.DB_POOL_MAX
    }
  }
});

export default db;
