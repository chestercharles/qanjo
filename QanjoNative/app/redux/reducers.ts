import { combineReducers } from 'redux';

import { usersReducer } from './user/reducers';

export const reducers = combineReducers({
  users: usersReducer,
});
export type RootState = ReturnType<typeof reducers>;
