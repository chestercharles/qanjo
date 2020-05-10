import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import {
  CreateBandMutation,
  CreateBandDocument,
  CurrentUserDocument,
  CurrentUserQuery,
} from '../../../../gql';
import { View, StyleSheet } from 'react-native';
import Headline from '../../../../components/Headline';
import InputField from '../../../../components/InputField';
import Button from '../../../../components/Button';
import { colors } from '../../../../theme';

const CreateBand: React.FC = () => {
  const navigation = useNavigation();
  const [bandName, setBandName] = useState('');
  const { data } = useQuery<CurrentUserQuery>(CurrentUserDocument);

  const [createBand, { loading, error }] = useMutation<CreateBandMutation>(
    CreateBandDocument,
    {
      refetchQueries: ['CurrentBand'],
      variables: { band_name: bandName, owner_id: data?.currentUser?.id },
      onCompleted: () => navigation.goBack(),
    },
  );

  return (
    <View style={styles.container}>
      <Headline title="Start a band" />
      <InputField
        placeholder="Band Name..."
        onChangeText={setBandName}
        style={styles.input}
      />
      <Button onPress={() => createBand()} disabled={loading} title="Submit" />
    </View>
  );
};

export default CreateBand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
  },
});
