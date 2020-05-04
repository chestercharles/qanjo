import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import RootScreen from './modules/RootScreen';

const App = () => {
  console.log('in App')
  return (
    <Provider store={store}>
      <RootScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
