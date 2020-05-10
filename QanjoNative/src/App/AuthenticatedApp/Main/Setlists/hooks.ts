import { useRoute, RouteProp } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';
import { CurrentSetlistsQuery, CurrentSetlistsDocument } from '../../../../gql';
import { useMemo } from 'react';

type RouteState = RouteProp<Record<string, { id: string }>, string>;

export function useSetlist() {
  const route = useRoute<RouteState>();
  const { data } = useQuery<CurrentSetlistsQuery>(CurrentSetlistsDocument);
  return useMemo(() => {
    if (data?.currentSetlists) {
      return data.currentSetlists.find(
        (setlist) => setlist.id === route.params.id,
      );
    } else {
      return null;
    }
  }, [route.params.id, data?.currentSetlists]);
}
