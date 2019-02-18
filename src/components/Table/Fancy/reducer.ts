import {AppAction} from '../../../actions';
import {dataAction} from '../../../core/types';
import {addColumns, removeColumns, updateChecked} from '../../helpers';
import {fancyAction} from './actions';
import {FancyState} from './types';

export const defaultState: FancyState = {
  selected: [],
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
      ...state,
      rows: action.response.rows,
      columns: {active: action.response.columns, inactive: []}
    };
  case fancyAction.TOGGLE_CHECKED:
    return {...state, selected: updateChecked(action.row, state.selected)};
  case fancyAction.ADD_COLUMNS:
    return {...state, columns: addColumns(action.side, action.column, action.columns, state.columns)};
  case fancyAction.REMOVE_COLUMNS:
    return {...state, columns: removeColumns(action.columns, state.columns)};
  default:
    return state;
  }
};
