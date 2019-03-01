import {applyMiddleware, combineReducers, createStore} from 'redux';
import {AppAction} from './actions';
import {AppState} from './types';
import {middleware as viewMiddleware} from './view';
import {reducers as view} from './view';

export const store = createStore(combineReducers<AppState, AppAction>({
  ...view
}), applyMiddleware(...viewMiddleware));
