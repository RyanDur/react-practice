import {AppMiddleware} from '../store';
import {connectToData, socketAction} from './action';
import {DataResponse} from './types/DataResponse';

export const socketMiddleware = (clientConnector: (fn: (data: DataResponse) => void) => void): AppMiddleware =>
  (store) => (next) => (action) => {
    if (action.type === socketAction.CONNECT) {
      clientConnector(connectToData(store.dispatch));
    }
    next(action);
  };
