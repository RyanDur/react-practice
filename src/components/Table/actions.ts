import {Action} from 'redux';
import {Row} from './types';
import {Direction} from './menu/types';

export enum tableAction {
  REMOVE_COLUMNS = 'REMOVE_COLUMN',
  ADD_COLUMNS = 'ADD_COLUMN',
  SET_DEFAULT_CHECKED = 'SET_DEFAULT_CHECKED',
  TABLE_TOTALS = 'TABLE_TOTALS',
  TABLE_DATA = 'TABLE_DATA',
  TOGGLE_CHECKED = 'TOGGLE_CHECKED',
  UPDATE_TOTALS = 'UPDATE_TOTALS'
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
  type: tableAction.SET_DEFAULT_CHECKED;
  checked: boolean;
}

interface AddColumn {
  type: tableAction.ADD_COLUMNS;
  side: Direction;
  column: string;
  columns: string[];
}

interface RemoveColumn {
  type: tableAction.REMOVE_COLUMNS;
  columns: string[];
}

export type TableAction = TableTotals
  | TableData
  | ToggleChecked
  | SetDefaultChecked
  | AddColumn
  | RemoveColumn;
