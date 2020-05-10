import React, { useMemo } from 'react';
import { SectionList } from 'react-native';
import {
  Song,
  CurrentSongsDocument,
  CurrentSongsQuery,
} from '../../../../../gql';
import SongEntry from './SongEntry';
import SongSectionHeader from './SongSectionHeader';
import { useQuery } from '@apollo/react-hooks';

function sortIntoAlphabetizedSections(songs: Song[] = []) {
  const alphaSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => {
    return {
      title: letter,
      data: [] as Song[],
    };
  });
  const mappedSongs = songs
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
  while (i < mappedSongs.length) {
    const { song, firstLetter } = mappedSongs[i];
    if (firstLetter === alphaSet[j].title) {
      alphaSet[j].data.push(song);
      i++;
    } else {
      j++;
    }
  }
  return alphaSet;
}

type SongListProps = {
  onSongPress: (song: Song) => void;
};

const SongList: React.FC<SongListProps> = ({ onSongPress }) => {
  const { data, loading } = useQuery<CurrentSongsQuery>(CurrentSongsDocument);
  const sections = useMemo(() => {
    return sortIntoAlphabetizedSections(data?.currentSongs);
  }, [data?.currentSongs]);

  return (
    <SectionList
      sections={sections}
      renderItem={({ item }) => (
        <SongEntry key={item.id} song={item} onSongPress={onSongPress} />
      )}
      renderSectionHeader={(payload) => {
        if (payload.section.data.length > 0) {
          return <SongSectionHeader title={payload.section.title} />;
        } else {
          return null;
        }
      }}
    />
  );
};

export default SongList;
