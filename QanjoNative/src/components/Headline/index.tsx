import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { colors } from '../../theme';

const Headline: React.FC<{ title: string; style?: TextStyle }> = ({
  title,
  style,
}) => {
  return <Text style={[styles.logo, style]}>{title}</Text>;
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
