exports.seed = async function (knex) {
  // Deletes ALL existing entries
  const seedUser = await knex("users")
    .where({ username: "demo_user" })
    .first()
    .select("id");
  const seedBand = await knex("bands")
    .where({ band_name: "demo_band" })
    .first()
    .select("id");

  return knex("band_members").insert({
    user_id: seedUser.id,
    band_id: seedBand.id,
  });
};
