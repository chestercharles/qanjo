import React from 'react';
import { Modal } from 'react-native';
import CreateSetlist from './CreateSetlist';
import { Setlist } from '../../../../../../gql';

type CreateSetlistModalProps = {
  visible: boolean;
  onCompleted: (setlist: Setlist) => void;
  onRequestClose: () => void;
};

const CreateSetlistModal: React.FC<CreateSetlistModalProps> = ({
  visible,
  onCompleted,
  onRequestClose,
}) => {
  if (visible) {
    return (
      <Modal animationType={'slide'}>
        <CreateSetlist
          onCompleted={onCompleted}
          onRequestClose={onRequestClose}
        />
      </Modal>
    );
  } else {
    return null;
  }
};

export default CreateSetlistModal;
