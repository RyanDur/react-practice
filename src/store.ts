import {combineReducers, createStore} from 'redux';
import {reducer as table, TableState} from './components/ExcelTable/reducer';

export interface AppState {
  table: TableState;
}

export const store = createStore(combineReducers<AppState>({
  table
}));