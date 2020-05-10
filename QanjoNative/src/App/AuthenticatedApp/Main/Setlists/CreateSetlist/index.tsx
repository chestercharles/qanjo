import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  Setlist,
  CurrentBandQuery,
  CurrentBandDocument,
  CreateSetlistMutation,
  CreateSetlistDocument,
} from '../../../../../gql';
import Close from '../../../../../icons/Close';
import { colors, space } from '../../../../../theme';
import Headline from '../../../../../components/Headline';
import InputField from '../../../../../components/InputField';
import ButtonBar from '../../../../../components/ButtonBar';
import { useNavigation } from '@react-navigation/native';

const CreateSetlist: React.FC = () => {
  const navigation = useNavigation();
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
      onCompleted: (data) =>
        navigation.navigate('EditSetlist', { id: data.createSetlist.id }),
    },
  );

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
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
        onSecondaryPress={() => goBack()}
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
