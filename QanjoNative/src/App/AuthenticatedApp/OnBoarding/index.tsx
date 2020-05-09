import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateBand from './CreateBand';
import JoinBand from './JoinBand';

const Stack = createStackNavigator();
const OnBoarding: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreateBand"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          opacity: 1,
          shadowOpacity: 1,
          backgroundColor: 'transparent',
        },
      }}
    >
      <Stack.Screen name="CreateBand" component={CreateBand}></Stack.Screen>
      <Stack.Screen name="JoinBand" component={JoinBand}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default OnBoarding;
