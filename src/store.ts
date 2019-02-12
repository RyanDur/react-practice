import {applyMiddleware, combineReducers, createStore, Dispatch, MiddlewareAPI} from 'redux';
import {AppAction} from './actions';
import {components, ComponentState} from './components';
import {fancyMiddleware} from './components/Table/Fancy/middleware';
import {core as data} from './core';
import {socketMiddleware} from './core/middleware';
import {DataState} from './core/types';

export interface AppState {
  components: ComponentState;
  data: DataState;
}

export type AppMiddleware =
  (store: MiddlewareAPI<Dispatch<AppAction>, AppState>) =>
    (next: Dispatch<AppAction>) =>
      (action: AppAction) => void;

export const store = createStore(combineReducers<AppState>({
  components,
  data
}), applyMiddleware(socketMiddleware('ws://localhost:8999'), fancyMiddleware));
