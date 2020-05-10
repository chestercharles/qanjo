import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';

import { CurrentBandDocument, CurrentBandQuery } from '../../../gql';
import FullScreenLoader from '../../../components/FullScreenLoader';
import Songs from './Songs';
import { colors } from '../../../theme';
import Notes from '../../../icons/Notes';
import Calendar from '../../../icons/Calendar';
import List from '../../../icons/List';
import Home from './Home';
import Setlists from './Setlists';

const Tab = createBottomTabNavigator();
const Main: React.FC = () => {
  const navigation = useNavigation();
  const { data, loading } = useQuery<CurrentBandQuery>(CurrentBandDocument);

  useEffect(() => {
    if (!data?.currentBand && !loading) {
      navigation.navigate('OnBoarding');
    }
  }, [loading, data?.currentBand, navigation]);

  if (data?.currentBand) {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: colors.highlight,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => <Calendar color={color} />,
          }}
        />
        <Tab.Screen
          name="Setlists"
          component={Setlists}
          options={{
            tabBarIcon: ({ focused, color }) => <List color={color} />,
          }}
        />
        <Tab.Screen
          name="Songs"
          component={Songs}
          options={{
            tabBarIcon: ({ focused, color }) => <Notes color={color} />,
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return <FullScreenLoader />;
  }
};

export default Main;
