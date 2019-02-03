import {Action} from 'redux';
import {Row} from '../../core/types';
import {Direction} from './Menu/types';

export enum tableAction {
  REMOVE_COLUMNS = 'REMOVE_COLUMN',
  ADD_COLUMNS = 'ADD_COLUMN',
  SET_DEFAULT_CHECKED = 'SET_DEFAULT_CHECKED',
  TABLE_TOTALS = 'TABLE_TOTALS',
  TOGGLE_CHECKED = 'TOGGLE_CHECKED'
}

interface TableTotals extends Action {
  type: tableAction.TABLE_TOTALS;
  rows: Row[];
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
  | ToggleChecked
  | SetDefaultChecked
  | AddColumn
  | RemoveColumn;
