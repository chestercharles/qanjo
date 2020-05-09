exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("setlist_songs").del();
  await knex("songs").del();
  await knex("setlists").del();
  await knex("gig_sets").del();
  await knex("gigs").del();
  await knex("band_members").del();
  await knex("users").update({ default_band_id: null });
  await knex("bands").del();
  await knex("users").del();
};
