import {Dispatch, Store} from 'redux';
import {AppAction} from '../actions';
import {connectToData, socketAction} from './action';
import {DataResponse} from './types/DataResponse';

export const socketMiddleware = (clientConnector: (fn: (data: DataResponse) => void) => void) =>
  (store: Store) => (next: Dispatch) => (action: AppAction) => {
    if (action.type === socketAction.CONNECT) {
      clientConnector(connectToData(store.dispatch));
    }
    next(action);
  };
