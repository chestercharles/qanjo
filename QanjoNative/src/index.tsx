import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './App';
import client from './lib/client';

const Qanjo = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default Qanjo;
