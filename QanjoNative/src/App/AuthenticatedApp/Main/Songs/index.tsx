import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, space } from '../../../../theme';
import SongList from './SongList';
import Plus from '../../../../icons/Plus';
import AddSongModal from './AddSongModal';
import EditSongModal from './EditSongModal';
import Header from '../../../../components/Header';
import { Song } from '../../../../gql';
import InputField from '../../../../components/InputField';

const Songs: React.FC = () => {
  const [addSongModalVisible, setAddSongModalVisible] = useState(false);
  const [songToEdit, setSongToEdit] = useState<Song | null>(null);
  return (
    <View style={styles.container}>
      <Header
        title="Songs"
        contentRight={
          <TouchableOpacity onPress={() => setAddSongModalVisible(true)}>
            <Plus color={colors.button} />
          </TouchableOpacity>
        }
      />
      <View style={styles.search}>
        <InputField onChangeText={() => {}} placeholder={'Search...'} />
      </View>
      <SongList onSongPress={(song) => setSongToEdit(song)} />
      <AddSongModal
        visible={addSongModalVisible}
        onCompleted={() => setAddSongModalVisible(false)}
        onRequestClose={() => setAddSongModalVisible(false)}
      />
      <EditSongModal
        song={songToEdit}
        onCompleted={() => setSongToEdit(null)}
        onRequestClose={() => setSongToEdit(null)}
      />
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    marginHorizontal: space.gutter,
  },
});
