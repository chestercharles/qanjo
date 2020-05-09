import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../theme';

const Headline: React.FC<{ title: string }> = ({ title }) => {
  return <Text style={styles.logo}>{title}</Text>;
};

export default Headline;

const styles = StyleSheet.create({
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: colors.headline,
    padding: 10,
  },
});
