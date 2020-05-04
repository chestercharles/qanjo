import { RequestAction } from 'app/types/request-action';
import { User } from 'app/types';
import { ValuesOf } from 'app/types/helpers';
import { userActionTypes } from './action-types';

export type UserAction = LoginAction | LogoutAction;

interface LoginAction extends RequestAction<User> {
  readonly type: ValuesOf<typeof userActionTypes.LOGIN>;
}
export function login({
  username,
  password,
}: {
  username: string;
  password: string;
}): LoginAction {
  return {
    type: userActionTypes.LOGIN.REQUEST,
    apiRequest: {
      query: `mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password)
      }`,
      variables: {
        username,
        password,
      },
    },
  };
}

interface LogoutAction {
  readonly type: typeof userActionTypes.LOGOUT;
}
export function logout(): LogoutAction {
  return { type: userActionTypes.LOGOUT };
}
