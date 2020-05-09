import React from 'react';
import { Modal, View, Button, StyleSheet } from 'react-native';
import InputField from '../../../../../components/InputField';
import Headline from '../../../../../components/Headline';
import { colors } from '../../../../../theme';
import AddSong from './AddSong';

type AddSongModalProps = {
  visible: boolean;
  onCompleted: () => void;
  onRequestClose: () => void;
};

const AddSongModal: React.FC<AddSongModalProps> = ({
  visible,
  onCompleted,
  onRequestClose,
}) => {
  if (visible) {
    return (
      <Modal animationType={'slide'}>
        <AddSong onCompleted={onCompleted} onRequestClose={onRequestClose} />
      </Modal>
    );
  } else {
    return null;
  }
};

export default AddSongModal;
