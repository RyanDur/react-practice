import {AppMiddleware} from '../types';
import {default as App} from './connector';
import {TableAction, tableMiddleware, tableReducers, TableState} from './Table';

export type ViewAction = TableAction;
export type ViewState = TableState;
export const middleware: AppMiddleware[] = [
  ...tableMiddleware
];

export const reducers = tableReducers;

export default App;
