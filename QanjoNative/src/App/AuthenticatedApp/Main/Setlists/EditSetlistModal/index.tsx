import React from 'react';
import { Modal } from 'react-native';
import EditSetlist from './EditSetlist';
import { Setlist } from '../../../../../gql';

type EditSetlistModalProps = {
  setlist: Setlist | null;
  onCompleted: () => void;
  onRequestClose: () => void;
};

const EditSetlistModal: React.FC<EditSetlistModalProps> = ({
  setlist,
  onCompleted,
  onRequestClose,
}) => {
  if (setlist) {
    return (
      <Modal animationType={'slide'}>
        <EditSetlist
          setlist={setlist}
          onCompleted={onCompleted}
          onRequestClose={onRequestClose}
        />
      </Modal>
    );
  } else {
    return null;
  }
};

export default EditSetlistModal;
