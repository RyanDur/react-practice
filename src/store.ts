import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ComponentState} from './components';
import {components} from './components';
import {core as data} from './core';
import {createMySocketMiddleware} from './core/client';
import {DataState} from './core/types';

export interface AppState {
  components: ComponentState;
  data: DataState;
}

export const store = createStore(combineReducers<AppState>({
  components,
  data
}), applyMiddleware(createMySocketMiddleware('ws://localhost:8999')));
