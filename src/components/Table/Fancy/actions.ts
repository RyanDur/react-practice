import {Action} from 'redux';
import {Direction} from '../types';

export enum fancyAction {
  CONSOLIDATE_DATA = 'CONSOLIDATE_DATA',
  REMOVE_COLUMNS = 'REMOVE_COLUMN',
  ADD_COLUMNS = 'ADD_COLUMN',
  SET_DEFAULT_CHECKED = 'SET_DEFAULT_CHECKED',
  TOGGLE_CHECKED = 'TOGGLE_CHECKED'
}

interface ConsolidateData extends Action<fancyAction.CONSOLIDATE_DATA> {
  rows: string[];
  columns: string[];
}

interface ToggleChecked extends Action<fancyAction.TOGGLE_CHECKED> {
  row: string;
}

interface SetDefaultChecked extends Action<fancyAction.SET_DEFAULT_CHECKED> {
  checked: boolean;
}

interface AddColumn extends Action<fancyAction.ADD_COLUMNS> {
  side: Direction;
  column: string;
  columns: string[];
}

interface RemoveColumn extends Action<fancyAction.REMOVE_COLUMNS> {
  columns: string[];
}

export type FancyAction =
  | ConsolidateData
  | ToggleChecked
  | SetDefaultChecked
  | AddColumn
  | RemoveColumn;
