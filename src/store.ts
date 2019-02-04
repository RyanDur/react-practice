import {applyMiddleware, combineReducers, createStore} from 'redux';
import {table, TableState} from './components/Table';
import {core as data} from './core';
import {createMySocketMiddleware} from './core/client';
import {DataState} from './core/types';

export interface AppState {
  table: TableState;
  data: DataState;
}

export const store = createStore(combineReducers<AppState>({
  table,
  data
}), applyMiddleware(createMySocketMiddleware('ws://localhost:8999')));
