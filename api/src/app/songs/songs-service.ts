import { Song } from "./Song";

export async function getBandSongs(band_id: string) {
  const songs = await Song.query().where({ band_id }).orderBy("title");
  return songs;
}

export async function getSetlistSongs(setlist_id: string) {
  const songs = await Song.query()
    .select("songs.*", "setlist_songs.sort_order as setlist_sort_order")
    .innerJoin("setlist_songs", "setlist_songs.song_id", "songs.id")
    .where("setlist_songs.setlist_id", setlist_id)
    .orderBy("setlist_songs.sort_order");
  return songs;
}

export async function createSong({
  title,
  key,
  band_id,
}: {
  title: string;
  key: string;
  band_id: string;
}) {
  const song = await Song.query().insert({ title, key, band_id });
  return song;
}
