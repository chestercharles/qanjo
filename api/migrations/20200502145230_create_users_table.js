exports.up = async function (knex) {
  // Required plugin for generating uuids
  await knex.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  await knex.schema.createTable("users", (t) => {
    t.uuid("id").primary().unique().defaultTo(knex.raw("uuid_generate_v4()"));
    t.string("username").notNullable().unique();
    t.string("password").notNullable();
    t.timestamp("created_at").defaultTo(knex.fn.now());
    t.timestamp("updated_at").defaultTo(knex.fn.now());
  });
  return;
};

exports.down = async function (knex) {
  await knex.schema.dropTable("users");
  return;
};
