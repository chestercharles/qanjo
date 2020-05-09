import React from 'react';
import { Text } from 'react-native';

type ListHeaderPRops = {
  title: string;
};

const ListHeader: React.FC<ListHeaderPRops> = ({ title }) => {
  return <Text>{title}</Text>;
};

export default ListHeader;
