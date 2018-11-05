import {normalize, sumColumns, updateChecked} from './helpers';
import {tableAction, TableAction} from './actions';
import {TableState} from "./TableState";

const defaultState: TableState = {
  rows: [],
  defaultChecked: true,
  totals: {},
  columns: ["bar", "baz", "bob", "coo", "cop", "cor", "far", "faz", "foo", "fop"]
};

export const reducer = (state: TableState = defaultState, action: TableAction): TableState => {
  switch (action.type) {
    case tableAction.TABLE_DATA:
      return {...state, ...normalize(action.data, state.rows, state.defaultChecked)};
    case tableAction.TOGGLE_CHECKED:
      return {...state, rows: updateChecked(action.row, state.rows)};
    case tableAction.SET_DEFAULT_CHECKED:
      return {...state, defaultChecked: action.checked};
    case tableAction.UPDATE_TOTALS:
      return {...state, totals: sumColumns(state.rows)};
    default:
      return state;
  }
};