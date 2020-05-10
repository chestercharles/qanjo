import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Song } from '../../../../../../gql';
import { colors, space } from '../../../../../../theme';
import Checked from '../../../../../../icons/Checked';
import Unchecked from '../../../../../../icons/Unchecked';

type SetlistSongEntry = {
  song: Song;
  selected: boolean;
  onToggle: (song: Song) => void;
};

const SetlistSongEntry: React.FC<SetlistSongEntry> = ({
  song,
  selected,
  onToggle,
}) => {
  return (
    <TouchableOpacity onPress={() => onToggle(song)}>
      <View style={styles.container}>
        {selected ? (
          <Checked color={colors.button} />
        ) : (
          <Unchecked color={colors.button} />
        )}
        <Text style={styles.text}>{song.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SetlistSongEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: space.gutter * 2,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
});
