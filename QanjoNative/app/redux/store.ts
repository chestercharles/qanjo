import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import { reducers } from './reducers';
import { middleware } from './middleware';
import { offlineConfig } from './offlineConfig';

export const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware), offline(offlineConfig)),
);
