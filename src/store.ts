import {applyMiddleware, combineReducers, createStore} from 'redux';
import {components} from './components';
import {core} from './core';
import {TableState} from './components/Table/types';
import {createMySocketMiddleware} from './core/client';
import {DataState} from './core/types';

export interface AppState {
  table?: TableState;
  data?: DataState;
}

export const store = createStore(combineReducers<AppState>({
  ...components,
  ...core
}), applyMiddleware(createMySocketMiddleware('ws://localhost:8999')));
