import { combineReducers } from 'redux';
import { User } from 'app/types';
import { UserAction } from './actions';
import { userActionTypes } from './action-types';

function authenticatedUser(state: User, action: UserAction): User | null {
  switch (action.type) {
    case userActionTypes.LOGIN.COMMIT: {
      if (action.payload) {
        return action.payload.json;
      } else {
        return null;
      }
    }
    case userActionTypes.LOGIN.ROLLBACK:
    case userActionTypes.LOGOUT: {
      return null;
    }
    default: {
      return state || null;
    }
  }
}

export const usersReducer = combineReducers({ authenticatedUser });
