import {dataAction} from '../../../core/types';
import {AppMiddleware} from '../../../store';
import {fancyAction} from './actions';

export const fancyMiddleware: AppMiddleware = (store) => (next) => (action) => {
  if (action.type === dataAction.DATA) {
    store.dispatch({
      type: fancyAction.CONSOLIDATE_DATA,
      columns: Object.keys(action.data[0]).splice(1),
      rows: Object.values(action.data).map(row => row.name)
    });
    next(action);
  }
};
