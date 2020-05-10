import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Song } from '../../../../../gql';
import { space } from '../../../../../theme';

type SongEntryProps = {
  song: Song;
  onSongPress: (song: Song) => void;
};

const SongEntry: React.FC<SongEntryProps> = ({ song, onSongPress }) => {
  return (
    <TouchableOpacity onPress={() => onSongPress(song)}>
      <View style={styles.container}>
        <Text style={styles.text}>{song.title}</Text>
        <Text style={styles.text}>{song.key}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SongEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: space.gutter * 2,
  },
  text: {
    fontSize: 20,
  },
});
