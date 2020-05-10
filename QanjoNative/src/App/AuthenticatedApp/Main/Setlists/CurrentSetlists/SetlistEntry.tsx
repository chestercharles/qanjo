import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Setlist } from '../../../../../gql';
import { space } from '../../../../../theme';

type SetlistEntryProps = {
  setlist: Setlist;
  onSetlistPress: (setlist: Setlist) => void;
};

const SetlistEntry: React.FC<SetlistEntryProps> = ({
  setlist,
  onSetlistPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onSetlistPress(setlist)}>
      <View style={styles.container}>
        <Text style={styles.text}>{setlist.setlist_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SetlistEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: space.gutter * 2,
  },
  text: {
    fontSize: 20,
  },
});
