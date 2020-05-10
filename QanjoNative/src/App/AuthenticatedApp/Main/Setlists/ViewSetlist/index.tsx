import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { colors } from '../../../../../theme';
import Header from '../../../../../components/Header';
import ArrowLeft from '../../../../../icons/ArrowLeft';
import { useNavigation } from '@react-navigation/native';
import { useSetlist } from '../hooks';
import BulkEditSetlist from './BulkEditSetlist';
import SetlistSongList from './SetlistSongList';
import Edit from '../../../../../icons/Edit';

const ViewSetlist: React.FC = () => {
  const navigation = useNavigation();
  const setlist = useSetlist();
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <View>
      <Header
        title={setlist?.setlist_name}
        contentLeft={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color={colors.button} />
          </TouchableOpacity>
        }
        contentRight={
          <TouchableOpacity onPress={() => setShowEditModal(true)}>
            <Edit color={colors.button} />
          </TouchableOpacity>
        }
      />
      <SetlistSongList />
      {showEditModal && setlist && (
        <Modal animationType={'slide'}>
          <BulkEditSetlist
            onRequestClose={() => setShowEditModal(false)}
            setlist={setlist}
          />
        </Modal>
      )}
    </View>
  );
};

export default ViewSetlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
  },
});
