exports.seed = async function (knex) {
  const seedUser = await knex("users")
    .where({ username: "demo_user" })
    .first()
    .select("id");
  const seedBand = await knex("bands")
    .where({ band_name: "demo_band" })
    .first()
    .select("id");

  return knex("users")
    .update({
      default_band_id: seedBand.id,
    })
    .where({ id: seedUser.id });
};
