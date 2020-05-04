exports.seed = async function (knex) {
  // Deletes ALL existing entries
  const seedUser = await knex("users")
    .where({ username: "demo_user" })
    .first()
    .select("id");

  return knex("bands").insert({
    owner_id: seedUser.id,
    band_name: "demo_band",
  });
};
