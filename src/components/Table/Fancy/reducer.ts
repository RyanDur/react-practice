import {AppAction} from '../../../actions';
import {dataAction} from '../../../core/types';
import {addColumns, removeColumns, updateChecked} from '../../helpers';
import {fancyAction} from './actions';
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
  action: AppAction
): FancyState => {
  switch (action.type) {
  case dataAction.DATA:
    return {
      rows: Object.values(action.data).map(row => ({name: row.name})),
      columns: {active: Object.keys(action.data[0]).splice(1), inactive: []}
    };
  case fancyAction.TOGGLE_CHECKED:
    return {...state, rows: updateChecked(action.row, state.rows)};
  case fancyAction.ADD_COLUMNS:
    return {...state, columns: addColumns(action.side, action.column, action.columns, state.columns)};
  case fancyAction.REMOVE_COLUMNS:
    return {...state, columns: removeColumns(action.columns, state.columns)};
  default:
    return state;
  }
};
