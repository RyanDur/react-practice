import {Store} from 'redux';
import {AppMiddleware} from '../store';
import {socketAction} from './action';
import {clientConnector} from './clientConnector';
import {dataAction} from './types';

export const socketMiddleware = (url: string): AppMiddleware =>
  (store: Store) => next => action => {
    if (action.type === socketAction.CONNECT) {
      clientConnector(url,
        data => store.dispatch(
          {type: dataAction.DATA, data}
        ));
    }
    next(action);
  };
