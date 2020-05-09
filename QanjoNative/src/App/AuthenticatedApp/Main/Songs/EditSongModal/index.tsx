import React from 'react';
import { Modal } from 'react-native';
import EditSong from './EditSong';
import { Song } from '../../../../../gql';

type AddSongModalProps = {
  song: Song | null;
  onCompleted: () => void;
  onRequestClose: () => void;
};

const AddSongModal: React.FC<AddSongModalProps> = ({
  song,
  onCompleted,
  onRequestClose,
}) => {
  if (song) {
    return (
      <Modal animationType={'slide'}>
        <EditSong
          onCompleted={onCompleted}
          onRequestClose={onRequestClose}
          song={song}
        />
      </Modal>
    );
  } else {
    return null;
  }
};

export default AddSongModal;
