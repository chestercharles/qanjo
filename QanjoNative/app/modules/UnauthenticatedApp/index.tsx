import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

const UnauthenticatedApp: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedApp;
