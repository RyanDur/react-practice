import {tableAction, TableAction} from '../actions';
import {addColumns, removeColumns, updateChecked} from '../helpers';
import {FancyState} from './types';

export const defaultState: FancyState = {
  rows: [],
  columns: {
    active: [],
    inactive: []
  }
};

export const reducer = (
  state: FancyState = defaultState,
  action: TableAction
): FancyState => {
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
