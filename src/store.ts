import {applyMiddleware, combineReducers, createStore} from 'redux';
import {clientConnector} from './core/clientConnector';
import {socketMiddleware} from './core/middleware';
import {reducers as core} from './core';
import {reducers as view} from './view';
import {AppAction} from './actions';
import {AppState} from './types';

export const store = createStore(combineReducers<AppState, AppAction>({
  ...view,
  ...core
}), applyMiddleware(socketMiddleware(clientConnector(new WebSocket('ws://localhost:7771')))));
