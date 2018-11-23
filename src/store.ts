import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as table} from './components/Table/reducer';
import {TableState} from './components/Table/types';
import {createMySocketMiddleware} from './core/client';

export interface AppState {
  table: TableState;
}

export const store = createStore(combineReducers<AppState>({
  table
}), applyMiddleware(createMySocketMiddleware('ws://localhost:8999')));