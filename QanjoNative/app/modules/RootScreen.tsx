import React from 'react';
import useRootSelector from 'app/redux/userRootSelector';
import UnauthenticatedApp from './UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';

const RootScreen: React.FC = () => {
  const authenticatedUser = useRootSelector(
    (state) => state.users.authenticatedUser,
  );

  if (authenticatedUser) {
    return <AuthenticatedApp />;
  } else {
    return <UnauthenticatedApp />;
  }
};

export default RootScreen;
