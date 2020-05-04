exports.seed = async function (knex) {
  const seedBand = await knex("bands")
    .where({ band_name: "demo_band" })
    .first()
    .select("id");

  return knex("setlists").insert({
    band_id: seedBand.id,
    setlist_name: "demo_setlist",
  });
};
