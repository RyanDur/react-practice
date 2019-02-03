import {addColumns, removeColumns, updateChecked} from './helpers';
import {tableAction, TableAction} from './actions';
import {TableState} from './types';

const defaultState: TableState = {
  rows: [],
  columns: {
    active: ['bar', 'baz', 'bob', 'coo', 'cop', 'cor', 'far', 'faz', 'foo', 'fop'],
    inactive: ['another', 'yet_another']
  }
};

export const reducer = (
  state: TableState = defaultState,
  action: TableAction
): TableState => {
  switch (action.type) {
  case tableAction.TOGGLE_CHECKED:
    return {...state, rows: updateChecked(action.row, state.rows)};
  case tableAction.ADD_COLUMNS:
    return {...state, columns: addColumns(action.side, action.column, action.columns, state.columns)};
  case tableAction.REMOVE_COLUMNS:
    return {...state, columns: removeColumns(action.columns, state.columns)};
  default:
    return state;
  }
};
