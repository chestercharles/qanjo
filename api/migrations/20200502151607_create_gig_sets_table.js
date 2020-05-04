exports.up = async function (knex) {
  // Required plugin for generating uuids
  await knex.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  await knex.schema.createTable("gig_sets", (t) => {
    t.uuid("id").primary().unique().defaultTo(knex.raw("uuid_generate_v4()"));
    t.string("set_name").notNullable();
    t.timestamp("set_time").notNullable();
    t.uuid("gig_id").references("id").inTable("gigs");
    t.timestamp("created_at").defaultTo(knex.fn.now());
    t.timestamp("updated_at").defaultTo(knex.fn.now());
  });
  return;
};

exports.down = async function (knex) {
  await knex.schema.dropTable("gig_sets");
  return;
};
