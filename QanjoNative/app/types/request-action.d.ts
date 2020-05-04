import { Action } from 'redux';
export interface RequestAction<T> extends Action {
  payload?: {
    json: T;
  };
  apiRequest?: {
    query: string;
    variables?: any;
  };
}
