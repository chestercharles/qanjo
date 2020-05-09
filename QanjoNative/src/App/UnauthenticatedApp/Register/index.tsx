import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { CreateUserDocument, CreateUserMutation } from '../../../gql';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import Headline from '../../../components/Headline';
import { colors } from '../../../theme';

const Register: React.FC = () => {
  const navigation = useNavigation();

  const [dirty, setDirty] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const client = useApolloClient();
  const [createUser, { loading, error }] = useMutation<CreateUserMutation>(
    CreateUserDocument,
    {
      variables: { username, password, email },
      onCompleted: async ({ createUser }) => {
        await AsyncStorage.setItem('token', createUser.token);
        client.resetStore();
      },
    },
  );

  return (
    <View style={styles.container}>
      <Headline title="Register" />
      <InputField
        placeholder="Username..."
        onChangeText={setUsername}
        hasError={dirty && !username}
      />
      <InputField
        placeholder="Email..."
        onChangeText={setEmail}
        hasError={dirty && !email}
      />
      <InputField
        placeholder="Password..."
        onChangeText={setPassword}
        hasError={dirty && !password}
      />
      <Button
        onPress={() => {
          if (loading || !username || !password) {
            setDirty(true);
          } else {
            createUser();
          }
        }}
        title="Submit"
        loading={loading}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.secondaryAction}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
