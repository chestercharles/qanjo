import React, { useMemo } from 'react';
import { View, TouchableOpacity, StyleSheet, SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';
import SetlistEntry from './SetlistEntry';
import {
  CurrentSetlistsQuery,
  CurrentSetlistsDocument,
} from '../../../../../gql';
import Plus from '../../../../../icons/Plus';
import { colors, space } from '../../../../../theme';
import Header from '../../../../../components/Header';

const CurrentSetlists: React.FC = () => {
  const navigation = useNavigation();
  const { data } = useQuery<CurrentSetlistsQuery>(CurrentSetlistsDocument);
  const sections = useMemo(() => {
    return [
      {
        title: 'Setlists',
        data: data?.currentSetlists || [],
      },
    ];
  }, [data?.currentSetlists]);
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
      <SectionList
        sections={sections}
        renderItem={({ item }) => (
          <SetlistEntry
            key={item.id}
            setlist={item}
            onSetlistPress={() =>
              navigation.navigate('ViewSetlist', {
                id: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default CurrentSetlists;

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
