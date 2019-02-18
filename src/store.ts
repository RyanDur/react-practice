import {applyMiddleware, combineReducers, createStore, Dispatch, MiddlewareAPI} from 'redux';
import {AppAction} from './actions';
import {components, ComponentState} from './components';
import {fancyMiddleware} from './components/Table/Fancy/middleware';
import {core} from './core';
import {clientConnector} from './core/clientConnector';
import {socketMiddleware} from './core/middleware';
import {CoreState} from './core/types';

export interface AppState {
  components: ComponentState;
  core: CoreState;
}

export type AppMiddleware =
  (store: MiddlewareAPI<Dispatch<AppAction>, AppState>) =>
    (next: Dispatch<AppAction>) =>
      (action: AppAction) => void;
const socket = new WebSocket('ws://localhost:8999');

export const store = createStore(combineReducers<AppState>({
  components,
  core
}), applyMiddleware(socketMiddleware(clientConnector(socket)), fancyMiddleware));
