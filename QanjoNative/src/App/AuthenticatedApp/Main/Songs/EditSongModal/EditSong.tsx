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
  Song,
} from '../../../../../gql';
import Button from '../../../../../components/Button';
import Close from '../../../../../icons/Close';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonBar from '../../../../../components/ButtonBar';

type AddSong = {
  onCompleted: () => void;
  onRequestClose: () => void;
  song: Song;
};

const AddSong: React.FC<AddSong> = ({ onCompleted, onRequestClose, song }) => {
  console.log(song);
  const [title, setTitle] = useState(song.title);
  const [key, setKey] = useState(song.key);
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
      <Headline title="Edit song" />
      <InputField
        value={title}
        placeholder="Title..."
        onChangeText={setTitle}
        hasError={dirty && !title}
      />
      <InputField
        value={key}
        placeholder="Key..."
        onChangeText={setKey}
        hasError={dirty && !key}
      />
      <ButtonBar
        onPrimaryPress={() => {
          if (loading || !key || !title) {
            setDirty(true);
          } else {
            createSong();
          }
        }}
        onSecondaryPress={onRequestClose}
        secondaryTitle={'Cancel'}
        primaryTitle="Save"
        primaryLoading={loading}
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
