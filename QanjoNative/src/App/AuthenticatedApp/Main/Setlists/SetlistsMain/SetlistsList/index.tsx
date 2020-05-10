import React, { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SectionList } from 'react-native';

import {
  CurrentSetlistsQuery,
  CurrentSetlistsDocument,
  Setlist,
} from '../../../../../../gql';
import SetlistEntry from './SetlistEntry';

type SetlistsListProps = {
  onSetlistPress: (setlist: Setlist) => void;
};

const SetlistsList: React.FC<SetlistsListProps> = ({ onSetlistPress }) => {
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
    <SectionList
      sections={sections}
      renderItem={({ item }) => (
        <SetlistEntry
          key={item.id}
          setlist={item}
          onSetlistPress={onSetlistPress}
        />
      )}
    />
  );
};

export default SetlistsList;
