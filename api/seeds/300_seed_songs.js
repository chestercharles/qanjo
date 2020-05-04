exports.seed = async function (knex) {
  const seedBand = await knex("bands")
    .where({ band_name: "demo_band" })
    .first()
    .select("id");

  return knex("songs").insert([
    {
      band_id: seedBand.id,
      title: "demo_song_1",
      key: "A",
    },
    {
      band_id: seedBand.id,
      title: "demo_song_2",
      key: "G",
    },
  ]);
};
