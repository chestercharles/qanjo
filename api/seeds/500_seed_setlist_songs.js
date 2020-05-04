exports.seed = async function (knex) {
  const seedBand = await knex("bands")
    .where({ band_name: "demo_band" })
    .first()
    .select("id");

  const seedSetlist = await knex("setlists")
    .where({ setlist_name: "demo_setlist" })
    .first()
    .select("id");

  const [song1, song2] = await knex("songs")
    .where({ band_id: seedBand.id })
    .select("id");

  return knex("setlist_songs").insert([
    {
      setlist_id: seedSetlist.id,
      song_id: song1.id,
      sort_order: 0,
    },
    {
      setlist_id: seedSetlist.id,
      song_id: song2.id,
      sort_order: 1,
    },
  ]);
};
