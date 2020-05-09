import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../../components/Button';
import { useApolloClient } from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import { colors } from '../../../theme';

const Settings: React.FC = () => {
  const client = useApolloClient();

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
