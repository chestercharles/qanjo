exports.up = async function (knex) {
  // Required plugin for generating uuids
  await knex.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  await knex.schema.createTable("setlist_songs", (t) => {
    t.uuid("id").primary().unique().defaultTo(knex.raw("uuid_generate_v4()"));
    t.uuid("song_id").references("id").inTable("songs");
    t.uuid("setlist_id").references("id").inTable("setlists");
    t.integer("sort_order").notNullable();
    t.timestamp("created_at").defaultTo(knex.fn.now());
    t.timestamp("updated_at").defaultTo(knex.fn.now());
  });
  return;
};

exports.down = async function (knex) {
  await knex.schema.dropTable("setlist_songs");
  return;
};
