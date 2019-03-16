import {AppMiddleware} from '../types';
import {page, PaginationAction, PaginationState} from './Paginator';
import {default as App} from './connector';
import {ErrorAction, errorBoundary, ErrState} from './ErrorBoundary';
import {TableAction, tableMiddleware, tableReducers, TableState} from './Table';

export type ViewAction = TableAction | ErrorAction | PaginationAction;
export type ViewState = TableState & ErrState & PaginationState;
export const middleware: AppMiddleware[] = [
  ...tableMiddleware
];

export const reducers = {...tableReducers, errorBoundary, page};

export default App;
