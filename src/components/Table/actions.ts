import {Action} from "redux";
import {Row} from './types';
import {Direction} from './menu/types';

export enum tableAction {
  ADD_COLUMN = 'ADD_COLUMN',
  SET_DEFAULT_CHECKED = 'SET_DEFAULT_CHECKED',
  TABLE_TOTALS = 'TABLE_TOTALS',
  TABLE_DATA = 'TABLE_DATA',
  TOGGLE_CHECKED = 'TOGGLE_CHECKED',
  UPDATE_TOTALS = "UPDATE_TOTALS"
}


interface TableTotals extends Action {
  type: tableAction.TABLE_TOTALS;
  rows: Row[];
}

interface TableData extends Action {
  type: tableAction.TABLE_DATA;
  data?: any;
  defaultChecked?: boolean;
}

interface ToggleChecked extends Action {
  type: tableAction.TOGGLE_CHECKED;
  row: Row;
}

interface SetDefaultChecked {
  type: tableAction.SET_DEFAULT_CHECKED
  checked: boolean
}

interface UpdateTotals {
  type: tableAction.UPDATE_TOTALS
}

interface AddColumn {
  type: tableAction.ADD_COLUMN
  side: Direction
  column: string
  columns: string[]
}

export type TableAction = TableTotals
  | TableData
  | ToggleChecked
  | SetDefaultChecked
  | UpdateTotals
  | AddColumn