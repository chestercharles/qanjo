import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import InputField from '../../../../../components/InputField';
import Headline from '../../../../../components/Headline';
import { colors, space } from '../../../../../theme';
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
import ButtonBar from '../../../../../components/ButtonBar';

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
        style={styles.input}
      />
      <InputField
        placeholder="Key..."
        onChangeText={setKey}
        hasError={dirty && !key}
        style={styles.input}
      />
      <ButtonBar
        onPrimaryPress={() => {
          if (loading || !key || !title) {
            setDirty(true);
          } else {
            createSong();
          }
        }}
        primaryTitle="Save"
        primaryLoading={loading}
        onSecondaryPress={onRequestClose}
        secondaryTitle="Cancel"
        style={styles.buttonBar}
      />
    </View>
  );
};

export default AddSong;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginHorizontal: space.gutter,
    marginVertical: space.gutter / 2,
  },
  buttonBar: {
    width: '80%',
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
