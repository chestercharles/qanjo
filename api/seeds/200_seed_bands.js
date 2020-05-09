exports.seed = async function (knex) {
  const seedUser = await knex("users")
    .where({ username: "demo_user" })
    .first()
    .select("id");

  return knex("bands").insert({
    owner_id: seedUser.id,
    band_name: "demo_band",
  });
};
