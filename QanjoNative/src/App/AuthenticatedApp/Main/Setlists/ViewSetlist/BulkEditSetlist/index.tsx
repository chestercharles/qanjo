import React, { useMemo } from 'react';
import { StyleSheet, View, SectionList, SafeAreaView } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import SetlistSongEntry from './SetlistSongEntry';
import {
  CurrentSongsQuery,
  CurrentSongsDocument,
  Setlist,
  SetlistSongsQuery,
  SetlistSongsDocument,
  AddSongToSetlistMutation,
  AddSongToSetlistDocument,
  RemoveSongFromSetlistMutation,
  RemoveSongFromSetlistDocument,
} from '../../../../../../gql';
import sortSongsIntoAlphabetizedSections from '../../../../../../helpers/sortSongsIntoAlphabetizedSections';
import Headline from '../../../../../../components/Headline';
import { colors, borders } from '../../../../../../theme';
import Button from '../../../../../../components/Button';

function useSongSections() {
  const songsQuery = useQuery<CurrentSongsQuery>(CurrentSongsDocument);
  return sortSongsIntoAlphabetizedSections(songsQuery.data?.currentSongs);
}

function useSetlistSongsMap(
  setlist: Setlist | null | undefined,
): { [key: string]: boolean } {
  const setlistQuery = useQuery<SetlistSongsQuery>(SetlistSongsDocument, {
    variables: { setlist_id: setlist?.id },
  });
  return useMemo(() => {
    const setlistSongs = setlistQuery.data?.setlistSongs || [];
    return setlistSongs.reduce((map, setlistSong) => {
      return {
        ...map,
        [setlistSong.id]: true,
      };
    }, {});
  }, [setlistQuery.data?.setlistSongs]);
}

type BulkEditSetlistProps = {
  setlist: Setlist;
  onRequestClose: () => void;
};

const BulkEditSetlist: React.FC<BulkEditSetlistProps> = ({
  setlist,
  onRequestClose,
}) => {
  const sections = useSongSections();
  const setlistSongsMap = useSetlistSongsMap(setlist);

  const [addSongToSetlist] = useMutation<AddSongToSetlistMutation>(
    AddSongToSetlistDocument,
    { refetchQueries: ['SetlistSongs'] },
  );
  const [removeSongFromSetlist] = useMutation<RemoveSongFromSetlistMutation>(
    RemoveSongFromSetlistDocument,
    { refetchQueries: ['SetlistSongs'] },
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headlineContainer}>
          <Headline
            title={`Choose songs for ${setlist?.setlist_name}`}
            style={styles.headline}
          />
        </View>
      </SafeAreaView>
      <SectionList
        sections={sections}
        renderItem={({ item }) => {
          const selected = setlistSongsMap[item.id];
          return (
            <SetlistSongEntry
              key={item.id}
              song={item}
              selected={selected}
              onToggle={() => {
                if (selected) {
                  removeSongFromSetlist({
                    variables: { song_id: item.id, setlist_id: setlist?.id },
                  });
                } else {
                  addSongToSetlist({
                    variables: {
                      song_id: item.id,
                      setlist_id: setlist?.id,
                      sort_order: 0,
                    },
                  });
                }
              }}
            />
          );
        }}
      />
      <SafeAreaView>
        <Button
          title="Done"
          onPress={() => onRequestClose()}
          style={styles.button}
        />
      </SafeAreaView>
    </View>
  );
};

export default BulkEditSetlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
  },
  headlineContainer: {
    width: '90%',
    borderBottomColor: colors.stroke,
    borderBottomWidth: borders.width,
    alignSelf: 'center',
  },
  headline: {
    fontSize: 20,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
  },
});
