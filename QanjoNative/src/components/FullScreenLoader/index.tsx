import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../../theme';

const FullScreenLoader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default FullScreenLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
