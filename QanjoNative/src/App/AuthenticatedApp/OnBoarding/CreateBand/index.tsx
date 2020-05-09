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
      <InputField placeholder="Band Name..." onChangeText={setBandName} />
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
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: colors.main,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    fontSize: 20,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    backgroundColor: '#fb5b5a',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
