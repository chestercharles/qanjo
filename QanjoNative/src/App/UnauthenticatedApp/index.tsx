import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

const UnauthenticatedApp: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: () => null,
        cardStyle: {
          opacity: 1,
          shadowOpacity: 1,
          backgroundColor: 'transparent',
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedApp;
