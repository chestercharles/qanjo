import AsyncStorage from '@react-native-community/async-storage';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  request: async (operation) => {
    const token = await AsyncStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  onError: (err) => {
    console.log(err);
  },
});

export default client;
