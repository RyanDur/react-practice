import {initialState} from './__test__/initialState';
import {sumColumns, updateChecked} from './helpers';
import {tableAction} from './actions';

export interface Data {
  [s: string]: number
}

export interface Row {
  name: string
  data: Data
  checked: boolean
}

export interface TableState {
  rows: Row[]
  totals: Data
  columns: string[]
}

export type TableAction = {
  type: tableAction.TABLE_TOTALS,
  rows: Row[]
} | {
  type: tableAction.TABLE_DATA,
} | {
  type: tableAction.TOGGLE_CHECKED
  row: Row
}

const defaultState: TableState = {rows: [], totals: {}, columns: []};

export const reducer = (state: TableState = defaultState, action: TableAction): TableState => {
  switch (action.type) {
    case tableAction.TABLE_TOTALS:
      return {...state, totals: sumColumns(action.rows)};
    case tableAction.TABLE_DATA:
      return {...state, ...initialState};
    case tableAction.TOGGLE_CHECKED:
      return {...state, rows: updateChecked(action.row, state.rows)};
    default:
      return state;
  }
};