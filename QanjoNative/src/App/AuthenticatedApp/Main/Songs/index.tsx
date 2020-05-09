import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../../theme';
import Headline from '../../../../components/Headline';
import SongList from './SongList';
import Plus from '../../../../icons/Plus';
import AddSongModal from './AddSongModal';
import Header from '../../../../components/Header';

const Songs: React.FC = () => {
  const [addSongModalVisible, setAddSongModalVisible] = useState(false);
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
      <SongList />
      <AddSongModal
        visible={addSongModalVisible}
        onCompleted={() => setAddSongModalVisible(false)}
        onRequestClose={() => setAddSongModalVisible(false)}
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
});
