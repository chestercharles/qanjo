import React from 'react';
import { Modal } from 'react-native';
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
