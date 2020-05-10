import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Setlist } from '../../../../../gql';
import Plus from '../../../../../icons/Plus';
import { colors, space } from '../../../../../theme';
import SetlistsList from './SetlistsList';
import Header from '../../../../../components/Header';
import { useNavigation } from '@react-navigation/native';

const SetlistsMain: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        title="Setlists"
        contentRight={
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateSetlist')}
          >
            <Plus color={colors.button} />
          </TouchableOpacity>
        }
      />
      <SetlistsList
        onSetlistPress={(setlist) =>
          navigation.navigate('ViewSetlist', { id: setlist.id })
        }
      />
    </View>
  );
};

export default SetlistsMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    marginHorizontal: space.gutter,
  },
});
