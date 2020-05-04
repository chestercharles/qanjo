const baseConfig = {
  client: "postgresql",
  seeds: {
    directory: "./seeds",
  },
  mighrations: {
    directory: "./seeds",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

const development = {
  ...baseConfig,
  connection: require("./config").development.connection,
};

module.exports = {
  development,
};
