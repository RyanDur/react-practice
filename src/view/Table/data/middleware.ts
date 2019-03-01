import {AppMiddleware} from '../../../types';
import {connectToData, socketAction} from './action';
import {DataResponse} from './types';

export const socketMiddleware = (clientConnector: (fn: (data: DataResponse) => void) => void): AppMiddleware =>
  (store) => (next) => (action) => {
    if (action.type === socketAction.CONNECT) {
      clientConnector(connectToData(store.dispatch));
    }
    next(action);
  };
