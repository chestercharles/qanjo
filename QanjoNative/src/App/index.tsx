import React from 'react';
import UnauthenticatedApp from './UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';
import { useQuery } from '@apollo/react-hooks';
import { CurrentUserQuery, CurrentUserDocument } from '../gql';

const App: React.FC = () => {
  const { data } = useQuery<CurrentUserQuery>(CurrentUserDocument);

  if (data) {
    return <AuthenticatedApp />;
  } else {
    return <UnauthenticatedApp />;
  }
};

export default App;
