import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SetlistsMain from './SetlistsMain';
import CreateSetlist from './CreateSetlist';

const Stack = createStackNavigator();

const Setlists: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SetlistsHome">
      <Stack.Screen
        name="SetlistsMain"
        component={SetlistsMain}
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

export default Setlists;
