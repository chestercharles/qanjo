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

const makeAlphaSet = () =>
  'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => {
    return {
      title: letter.toUpperCase(),
      data: [] as Song[],
    };
  });

type SongListProps = {
  onSongPress: (song: Song) => void;
};

const SongList: React.FC<SongListProps> = ({ onSongPress }) => {
  const { data, loading } = useQuery<CurrentSongsQuery>(CurrentSongsDocument);
  const sections = useMemo(() => {
    const alphaSet = makeAlphaSet();
    const songs = data?.currentSongs || [];
    let i = 0;
    let j = 0;
    while (i < songs.length) {
      const song = songs[i];
      const [letter] = song.title.toUpperCase();
      if (letter === alphaSet[j].title) {
        alphaSet[j].data.push(song);
        i++;
      } else {
        j++;
      }
    }
    return alphaSet;
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
