import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SongsScreen: React.FC = () => {
  
  return (
    <View style={styles.container}>
      <Text>Songs</Text>
    </View>
  );
};

export default SongsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
