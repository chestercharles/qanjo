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
import { TouchableOpacity } from 'react-native-gesture-handler';
import Gear from '../../../icons/Gear';
import Home from './Home';
import Setlists from './Setlists';

const Stack = createStackNavigator();

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
      <Stack.Navigator
        initialRouteName="Features"
        screenOptions={{
          cardStyle: {
            opacity: 1,
            shadowOpacity: 1,
            backgroundColor: 'transparent',
          },
        }}
      >
        <Stack.Screen
          name="Features"
          component={FeatureTabs}
          options={{
            headerShown: false,
            headerTitle: data?.currentBand.band_name,
            headerRight: () => (
              <TouchableOpacity
                style={{ padding: 15 }}
                onPress={() => navigation.navigate('Settings')}
              >
                <Gear />
              </TouchableOpacity>
            ),
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    );
  } else {
    return <FullScreenLoader />;
  }
};

export default Main;

const Tab = createBottomTabNavigator();
const FeatureTabs: React.FC = () => {
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
};
