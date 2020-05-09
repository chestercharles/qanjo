import React from 'react';
import UnauthenticatedApp from './UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';
import { useQuery } from '@apollo/react-hooks';
import { CurrentUserQuery, CurrentUserDocument } from '../gql';
import FullScreenLoader from '../components/FullScreenLoader';

const App: React.FC = () => {
  const { data, loading } = useQuery<CurrentUserQuery>(CurrentUserDocument);

  if (data?.currentUser) {
    return <AuthenticatedApp />;
  } else if (loading) {
    return <FullScreenLoader />;
  } else {
    return <UnauthenticatedApp />;
  }
};

export default App;
