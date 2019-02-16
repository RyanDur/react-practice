import {dataAction} from '../../../core/types';
import {AppMiddleware} from '../../../store';
import {fancyAction} from './actions';

export const fancyMiddleware: AppMiddleware = (store) => (next) => (action) => {
  if (action.type === dataAction.DATA) {
    store.dispatch({
      type: fancyAction.CONSOLIDATE_DATA,
      columns: action.response.columns,
      rows: action.response.rows
    });
    next(action);
  }
};
