import knex from "knex";
// @ts-ignore
import config from "../../config";

const db = knex({
  client: "pg",
  version: "12",
  connection: config.development.connection,
});

export default db;
