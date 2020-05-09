import React from 'react';
import { Text } from 'react-native';
import { Song } from '../../../../../gql';

type ListEntryProps = {
  song: Song;
};

const ListEntry: React.FC<ListEntryProps> = ({ song }) => {
  return <Text>{song.title}</Text>;
};

export default ListEntry;
