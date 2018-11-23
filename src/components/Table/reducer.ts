import {addColumns, normalize, sumColumns, updateChecked} from './helpers';
import {tableAction, TableAction} from './actions';
import {TableState} from './types';

const defaultState: TableState = {
  rows: [],
  totals: {},
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
    case tableAction.TABLE_DATA:
      return {...state, rows: normalize(action.data, state.rows)};
    case tableAction.TOGGLE_CHECKED:
      return {...state, rows: updateChecked(action.row, state.rows)};
    case tableAction.UPDATE_TOTALS:
      return {...state, totals: sumColumns(state.rows, state.columns.active)};
    case tableAction.ADD_COLUMN:
      return {...state, columns: addColumns(action.side, action.column, action.columns, state.columns)};
    default:
      return state;
  }
};