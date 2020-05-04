import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Features from './Features';
import Settings from './Settings';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const SettingsButton: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Button
      title={'Settings'}
      onPress={() => navigation.navigate('Settings')}
    />
  );
};

const AuthenticatedApp: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Features">
      <Stack.Screen
        name="Features"
        component={Features}
        options={{
          headerTitle: 'Qanjo',
          headerRight: () => <SettingsButton />,
        }}
      ></Stack.Screen>
      <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthenticatedApp;
