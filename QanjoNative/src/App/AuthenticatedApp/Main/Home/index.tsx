import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors } from '../../../../theme';
import Gear from '../../../../icons/Gear';
import Header from '../../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';
import { CurrentBandDocument, CurrentBandQuery } from '../../../../gql';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { data } = useQuery<CurrentBandQuery>(CurrentBandDocument);
  return (
    <View style={styles.container}>
      <Header
        title={data?.currentBand?.band_name}
        contentRight={
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Gear color={colors.button} />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
