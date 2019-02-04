import {tableAction, TableAction} from '../actions';
import {addColumns, removeColumns, updateChecked} from '../helpers';
import {FancyState} from './types';

export const defaultState: FancyState = {
  rows: [{name: 'Anna'}, {name: 'Travis'}, {name: 'Mendel'}, {name: 'Harrison'}, {name: 'Alex'}, {name: 'Jordan'}, {name: 'Mike'}, {name: 'Krishna'}, {name: 'Mohammad'}, {name: 'Paulina'}],
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
