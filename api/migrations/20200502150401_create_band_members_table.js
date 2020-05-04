exports.up = async function (knex) {
  // Required plugin for generating uuids
  await knex.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  await knex.schema.createTable("band_members", (t) => {
    t.uuid("id").primary().unique().defaultTo(knex.raw("uuid_generate_v4()"));
    t.uuid("band_id").references("id").inTable("bands");
    t.uuid("user_id").references("id").inTable("users");
    t.timestamp("created_at").defaultTo(knex.fn.now());
    t.timestamp("updated_at").defaultTo(knex.fn.now());
  });
  return;
};

exports.down = async function (knex) {
  await knex.schema.dropTable("band_members");
  return;
};
