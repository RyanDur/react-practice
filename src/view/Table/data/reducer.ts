import {dataAction, DataAction} from './action';
import {reconcile} from './helpers';
import {DataState} from './types';

const defaultState: DataState = {
  table: {},
  rows: [],
  columns: []
};

export const reducer = (
  state: DataState = defaultState,
  action: DataAction
): DataState => {
  switch (action.type) {
  case dataAction.DATA:
    return {
      ...state,
      table: reconcile(state.table, action),
      rows: action.rowNames,
      columns: action.columnNames
    };
  default:
    return state;
  }
};
