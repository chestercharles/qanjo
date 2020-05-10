import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateSetlist from './CreateSetlist';
import ViewSetlist from './ViewSetlist';
import CurrentSetlists from './CurrentSetlists';

const Stack = createStackNavigator();

const SetlistS: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="CurrentSetlists">
      <Stack.Screen
        name="CurrentSetlists"
        component={CurrentSetlists}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="ViewSetlist"
        component={ViewSetlist}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="CreateSetlist"
        component={CreateSetlist}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SetlistS;
