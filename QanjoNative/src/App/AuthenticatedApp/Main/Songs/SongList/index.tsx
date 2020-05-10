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
import sortSongsIntoAlphabetizedSections from '../../../../../helpers/sortSongsIntoAlphabetizedSections';

type SongListProps = {
  onSongPress: (song: Song) => void;
};

const SongList: React.FC<SongListProps> = ({ onSongPress }) => {
  const { data, loading } = useQuery<CurrentSongsQuery>(CurrentSongsDocument);
  const sections = useMemo(() => {
    return sortSongsIntoAlphabetizedSections(data?.currentSongs);
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
