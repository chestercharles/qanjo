import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../../../../theme';

type SongSectionHeaderProps = {
  title: string;
};

const SongSectionHeader: React.FC<SongSectionHeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default SongSectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 30,
    backgroundColor: colors.secondary,
  },
  text: {
    color: colors.headline,
    fontWeight: '800',
    paddingLeft: 10,
  },
});
