import {AppMiddleware} from '../store';
import {socketAction} from './action';
import {dataAction} from './types';
import {Response} from './types/Response';

export const socketMiddleware = (clientConnector: (fn: (data: Response) => void) => void): AppMiddleware =>
  (store) => next => action => {
    if (action.type === socketAction.CONNECT) {
      clientConnector(({data, columnNames, rowNames}: Response) => store.dispatch(
        {
          type: dataAction.DATA, response: {
            data,
            columns: columnNames,
            rows: rowNames
          }
        }));
    }
    next(action);
  };
