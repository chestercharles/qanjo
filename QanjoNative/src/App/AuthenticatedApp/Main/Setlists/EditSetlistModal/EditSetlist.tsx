import React, { useMemo } from 'react';
import {
  Setlist,
  SetlistSongsDocument,
  SetlistSongsQuery,
  CurrentSongsDocument,
  CurrentSongsQuery,
  AddSongToSetlistDocument,
  AddSongToSetlistMutation,
  RemoveSongFromSetlistDocument,
  RemoveSongFromSetlistMutation,
} from '../../../../../gql';
import { StyleSheet, View, SectionList, SafeAreaView } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import FullScreenLoader from '../../../../../components/FullScreenLoader';
import sortSongsIntoAlphabetizedSections from '../../../../../helpers/sortSongsIntoAlphabetizedSections';
import SetlistSongEntry from './SetlistSongEntry';
import { colors, space, borders } from '../../../../../theme';
import Button from '../../../../../components/Button';
import Headline from '../../../../../components/Headline';

type EditSetlistProps = {
  setlist: Setlist | null;
  onCompleted: () => void;
  onRequestClose: () => void;
};

const EditSetlist: React.FC<EditSetlistProps> = ({
  setlist,
  onCompleted,
  onRequestClose,
}) => {
  const songsQuery = useQuery<CurrentSongsQuery>(CurrentSongsDocument);
  const sections = sortSongsIntoAlphabetizedSections(
    songsQuery.data?.currentSongs,
  );

  const setlistQuery = useQuery<SetlistSongsQuery>(SetlistSongsDocument, {
    variables: { setlist_id: setlist?.id },
  });
  const setlistSongsMap: { [key: string]: boolean } = useMemo(() => {
    const setlistSongs = setlistQuery.data?.setlistSongs || [];
    return setlistSongs.reduce((map, setlistSong) => {
      return {
        ...map,
        [setlistSong.id]: true,
      };
    }, {});
  }, [setlistQuery.data?.setlistSongs]);

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
        <Button title="Done" onPress={onCompleted} style={styles.button} />
      </SafeAreaView>
    </View>
  );
};

export default EditSetlist;

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
