import { Setlist } from "./Setlist";
import { SetlistSong } from "./SetlistSong";

export async function getBandSetlists(band_id: string) {
  const setlists = await Setlist.query().where({ band_id });
  return setlists;
}

export async function createSetlist({
  setlist_name,
  band_id,
}: {
  setlist_name: string;
  band_id: string;
}) {
  const setlist = await Setlist.query().insert({ setlist_name, band_id });
  return setlist;
}

export async function getSetlist(setlist_id: string) {
  const [setlist] = await Setlist.query().where({ setlist_id });
  return setlist;
}

export async function addSongToSetlist({
  setlist_id,
  song_id,
  sort_order,
}: {
  setlist_id: string;
  song_id: string;
  sort_order: number;
}) {
  return SetlistSong.transaction(async (trx) => {
    // Fetch all setlist songs where the sort order needs to be incremented
    const setlistSongs = await SetlistSong.query(trx)
      .where({ setlist_id })
      .where("sort_order", ">=", sort_order);

    // increment each of the sort orders
    await Promise.all(
      setlistSongs.map((setlistSong) => {
        return SetlistSong.query(trx)
          .patch({ sort_order: setlistSong.sort_order + 1 })
          .where({ id: setlistSong.id });
      })
    );

    await SetlistSong.query(trx).insert({
      setlist_id,
      song_id,
      sort_order: sort_order,
    });
    const [setlist] = await Setlist.query(trx).where({ id: setlist_id });
    return setlist;
  });
}

export async function removeSongFromSetlist({
  setlist_id,
  song_id,
}: {
  setlist_id: string;
  song_id: string;
}) {
  return SetlistSong.transaction(async (trx) => {
    const [setlistSongToDelete] = await SetlistSong.query(trx).where({
      song_id,
      setlist_id,
    });

    // Fetch all setlist songs where the sort order needs to be decremented
    const setlistSongs = await SetlistSong.query(trx)
      .where({ setlist_id })
      .where("sort_order", ">", setlistSongToDelete.sort_order);

    // decrement each of the sort orders
    await Promise.all(
      setlistSongs.map((setlistSong) => {
        return SetlistSong.query(trx)
          .patch({ sort_order: setlistSong.sort_order - 1 })
          .where({ id: setlistSong.id });
      })
    );

    await SetlistSong.query(trx).deleteById(setlistSongToDelete.id);

    const [setlist] = await Setlist.query(trx).where({ id: setlist_id });
    return setlist;
  });
}

export async function updateSetlistSongSortOrder({
  setlist_song_id,
  sort_order,
}: {
  setlist_song_id: string;
  sort_order: number;
}) {
  return SetlistSong.transaction(async (trx) => {
    // fetch the setlist song being moved
    const [setlistSong] = await SetlistSong.query(trx).where({
      id: setlist_song_id,
    });

    // fetch all the setlist songs in this setlist
    let setlistSongs = await SetlistSong.query(trx)
      .where({ setlist_id: setlistSong.setlist_id })
      .orderBy("sort_order");

    // Move the setlist song to its new location
    setlistSongs = setlistSongs.filter((ss) => ss.id !== setlistSong.id);
    for (let i = setlistSongs.length; i > sort_order; i--) {
      setlistSongs[i] = setlistSongs[i - 1];
    }
    setlistSongs[sort_order] = setlistSong;

    // Update all setlist songs sort orders
    await Promise.all(
      setlistSongs.map((ss) => {
        return SetlistSong.query(trx)
          .patch({ sort_order: ss.sort_order })
          .where({ id: ss.id });
      })
    );

    // fetch the setlist
    const [setlist] = await Setlist.query(trx).where({
      id: setlistSong.setlist_id,
    });

    return setlist;
  });
}
