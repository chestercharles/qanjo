import { Song } from '../gql';

export default function sortSongsIntoAlphabetizedSections(songs: Song[] = []) {
  const alphaSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => {
    return {
      title: letter,
      data: [] as Song[],
    };
  });
  const songWithFirstLetter = songs
    .map((song) => {
      const title = song.title.toUpperCase();
      let firstLetter: string;
      if (/^THE\s/.test(title) && title.length > 4) {
        firstLetter = title[4];
      } else {
        firstLetter = title[0];
      }
      return {
        firstLetter,
        song,
      };
    })
    .sort((a, b) => {
      if (a.firstLetter > b.firstLetter) {
        return 1;
      } else if (b.firstLetter > a.firstLetter) {
        return -1;
      } else {
        return 0;
      }
    });

  let i = 0;
  let j = 0;
  while (i < songWithFirstLetter.length) {
    const { song, firstLetter } = songWithFirstLetter[i];
    if (firstLetter === alphaSet[j].title) {
      alphaSet[j].data.push(song);
      i++;
    } else {
      j++;
    }
  }
  return alphaSet;
}
