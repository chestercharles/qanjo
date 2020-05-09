import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { LoginDocument, LoginMutation } from '../../../gql';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import Headline from '../../../components/Headline';
import { colors } from '../../../theme';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation<LoginMutation>(
    LoginDocument,
    {
      variables: { username, password },
      onCompleted: async ({ login }) => {
        await AsyncStorage.setItem('token', login.token);
        client.resetStore();
      },
    },
  );

  return (
    <View style={styles.container}>
      <Headline title="Login" />
      <InputField placeholder="Username..." onChangeText={setUsername} />
      <InputField placeholder="Password..." onChangeText={setPassword} />
      <Button
        onPress={() => {
          if (loading || !username || !password) {
          } else {
            login();
          }
        }}
        title="Login"
        loading={loading}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.secondaryAction}>Don't have an account yet?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
});
