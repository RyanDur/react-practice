import {Middleware, Store} from 'redux';
import {socketAction} from './action';
import {clientConnector} from './clientConnector';
import {dataAction} from './types';

export const createMySocketMiddleware = (url: string): Middleware<any, any, any> =>
  (store: Store) => next => action => {
    if (action.type === socketAction.CONNECT) {
      clientConnector(url,
        data => store.dispatch(
          {type: dataAction.DATA, data}
        ));
    }
    next(action);
  };
