import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, font, borders, space } from '../../../../../theme';

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
    borderColor: colors.stroke,
    borderWidth: borders.width,
    borderRadius: borders.radius,
    marginHorizontal: space.gutter,
    marginVertical: space.gutter / 2,
  },
  text: {
    color: colors.headline,
    fontWeight: font.weight.bold,
    paddingLeft: 5,
  },
});
