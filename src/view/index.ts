import {AppMiddleware} from '../types';
import {default as App} from './connector';
import {ErrorAction, errorBoundary, ErrState} from './ErrorBoundary';
import {TableAction, tableMiddleware, tableReducers, TableState} from './Table';

export type ViewAction = TableAction | ErrorAction;
export type ViewState = TableState & ErrState;
export const middleware: AppMiddleware[] = [
  ...tableMiddleware
];

export const reducers = {...tableReducers, errorBoundary};

export default App;
