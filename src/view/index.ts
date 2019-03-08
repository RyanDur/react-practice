import {AppMiddleware} from '../types';
import {carousel, CarouselAction, CarouselState} from './Carousel';
import {default as App} from './connector';
import {ErrorAction, errorBoundary, ErrState} from './ErrorBoundary';
import {TableAction, tableMiddleware, tableReducers, TableState} from './Table';

export type ViewAction = TableAction | ErrorAction | CarouselAction;
export type ViewState = TableState & ErrState & CarouselState;
export const middleware: AppMiddleware[] = [
  ...tableMiddleware
];

export const reducers = {...tableReducers, errorBoundary, carousel};

export default App;
