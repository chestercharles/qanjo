import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SongsScreen from './screens/SongsScreen';
const Tab = createBottomTabNavigator();

const Features: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Gigs" component={SongsScreen} />
      <Tab.Screen name="Setlists" component={SongsScreen} />
      <Tab.Screen name="Songs" component={SongsScreen} />
    </Tab.Navigator>
  );
};

export default Features;
