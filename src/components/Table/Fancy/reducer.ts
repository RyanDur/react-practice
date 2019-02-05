import {tableAction, TableAction} from '../actions';
import {addColumns, removeColumns, updateChecked} from '../helpers';
import {FancyState} from './types';

export const defaultState: FancyState = {
  rows: [
    {name: 'Anna', data: []},
    {name: 'Travis', data: []},
    {name: 'Mendel', data: []},
    {name: 'Harrison', data: []},
    {name: 'Alex', data: []},
    {name: 'Jordan', data: []},
    {name: 'Mike', data: []},
    {name: 'Krishna', data: []},
    {name: 'Mohammad', data: []},
    {name: 'Paulina', data: []}
  ],
  columns: {
    active: ['bar', 'baz', 'bob', 'coo', 'cop', 'cor', 'far', 'faz', 'foo', 'fop'],
    inactive: ['another', 'yet_another']
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
