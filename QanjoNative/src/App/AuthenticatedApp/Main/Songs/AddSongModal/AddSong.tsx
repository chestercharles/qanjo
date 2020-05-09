import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import InputField from '../../../../../components/InputField';
import Headline from '../../../../../components/Headline';
import { colors } from '../../../../../theme';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  CurrentBandDocument,
  CurrentBandQuery,
  CreateSongDocument,
  CreateSongMutation,
} from '../../../../../gql';
import Button from '../../../../../components/Button';
import Close from '../../../../../icons/Close';
import { TouchableOpacity } from 'react-native-gesture-handler';

type AddSong = {
  onCompleted: () => void;
  onRequestClose: () => void;
};

const AddSong: React.FC<AddSong> = ({ onCompleted, onRequestClose }) => {
  const [title, setTitle] = useState('');
  const [key, setKey] = useState('');
  const [dirty, setDirty] = useState(false);
  const { data } = useQuery<CurrentBandQuery>(CurrentBandDocument);
  const [createSong, { loading }] = useMutation<CreateSongMutation>(
    CreateSongDocument,
    {
      refetchQueries: ['CurrentSongs'],
      variables: { band_id: data?.currentBand?.id, title, key },
      onCompleted,
    },
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.closeButton}>
        <TouchableOpacity onPress={() => onRequestClose()}>
          <Close color={colors.button} />
        </TouchableOpacity>
      </SafeAreaView>
      <Headline title="Add a song" />
      <InputField
        placeholder="Title..."
        onChangeText={setTitle}
        hasError={dirty && !title}
      />
      <InputField
        placeholder="Key..."
        onChangeText={setKey}
        hasError={dirty && !key}
      />
      <Button
        onPress={() => {
          if (loading || !key || !title) {
            setDirty(true);
          } else {
            createSong();
          }
        }}
        title="Submit"
        loading={loading}
      />
    </View>
  );
};

export default AddSong;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryAction: {
    color: colors.paragraph,
    paddingTop: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 0,
    marginTop: 50,
    right: 0,
    marginRight: 10,
  },
});
