import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../../../components/Header';
import Plus from '../../../../icons/Plus';
import { colors } from '../../../../theme';
import { useQuery } from '@apollo/react-hooks';
import { CurrentSetlistsDocument, CurrentSetlistsQuery } from '../../../../gql';

const Setlists: React.FC = () => {
  const { data } = useQuery<CurrentSetlistsQuery>(CurrentSetlistsDocument);
  return (
    <View style={styles.container}>
      <Header
        title="Setlists"
        contentRight={
          <TouchableOpacity onPress={() => {}}>
            <Plus color={colors.button} />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Setlists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
