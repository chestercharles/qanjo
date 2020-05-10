import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './OnBoarding';
import Main from './Main';
import Settings from './Settings';
import SetlistS from './Main/Setlists';

const Stack = createStackNavigator();

const AuthenticatedApp: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedApp;
