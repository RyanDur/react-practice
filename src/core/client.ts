import {Middleware, Store} from 'redux';
import {tableAction} from '../components/Table/actions';
import {socketAction} from './action';
import {clientConnector} from './clientConnector';

export const createMySocketMiddleware = (url: string): Middleware<any, any, any> =>
  (store: Store) => next => action => {
    if (action.type === socketAction.CONNECT) {
      clientConnector(url,
        data => store.dispatch(
          {type: tableAction.TABLE_DATA, data}
        ));
    }
    next(action);
  };
