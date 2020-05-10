import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import InputField from '../../../../../../components/InputField';
import Headline from '../../../../../../components/Headline';
import { colors, space } from '../../../../../../theme';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  CurrentBandDocument,
  CurrentBandQuery,
  CreateSetlistMutation,
  CreateSetlistDocument,
  Setlist,
} from '../../../../../../gql';
import Close from '../../../../../../icons/Close';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonBar from '../../../../../../components/ButtonBar';

type CreateSetlistProps = {
  onCompleted: (setlist: Setlist) => void;
  onRequestClose: () => void;
};

const CreateSetlist: React.FC<CreateSetlistProps> = ({
  onCompleted,
  onRequestClose,
}) => {
  const [setlistName, setSetlistName] = useState('');
  const [dirty, setDirty] = useState(false);
  const currentBandQuery = useQuery<CurrentBandQuery>(CurrentBandDocument);
  const [createSong, { loading }] = useMutation<CreateSetlistMutation>(
    CreateSetlistDocument,
    {
      refetchQueries: ['CurrentSetlists'],
      variables: {
        band_id: currentBandQuery.data?.currentBand?.id,
        setlist_name: setlistName,
      },
      onCompleted: (data) => onCompleted(data.createSetlist),
    },
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.closeButton}>
        <TouchableOpacity onPress={() => onRequestClose()}>
          <Close color={colors.button} />
        </TouchableOpacity>
      </SafeAreaView>
      <Headline title="Create a new setlist" style={styles.headline} />
      <InputField
        placeholder="Setlist name..."
        onChangeText={setSetlistName}
        hasError={dirty && !setlistName}
        style={styles.input}
      />
      <ButtonBar
        onPrimaryPress={() => {
          if (loading || !setlistName) {
            setDirty(true);
          } else {
            createSong();
          }
        }}
        primaryTitle="Next"
        primaryLoading={loading}
        onSecondaryPress={onRequestClose}
        secondaryTitle="Cancel"
        style={styles.buttonBar}
      />
    </View>
  );
};

export default CreateSetlist;

const styles = StyleSheet.create({
  headline: {
    fontSize: 30,
  },
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
