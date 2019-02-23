import {applyMiddleware, combineReducers, createStore, Dispatch, MiddlewareAPI} from 'redux';
import {AppAction} from './actions';
import {BaseState, reducers as components, SelectableState} from './components';
import {core} from './core';
import {clientConnector} from './core/clientConnector';
import {socketMiddleware} from './core/middleware';
import {CoreState} from './core/types';

export interface AppState {
  base: BaseState;
  selectable: SelectableState;
  core: CoreState;
}

export type AppMiddleware =
  (store: MiddlewareAPI<Dispatch<AppAction>, AppState>) =>
    (next: Dispatch<AppAction>) =>
      (action: AppAction) => void;

export const store = createStore(combineReducers<AppState, AppAction>({
  ...components,
  core
}), applyMiddleware(socketMiddleware(clientConnector(new WebSocket('ws://localhost:8999')))));
