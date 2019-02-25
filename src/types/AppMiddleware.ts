import {Dispatch, MiddlewareAPI} from 'redux';
import {AppAction} from '../actions';
import {AppState} from './AppState';

export type AppMiddleware =
  (store: MiddlewareAPI<Dispatch<AppAction>, AppState>) =>
    (next: Dispatch<AppAction>) =>
      (action: AppAction) => void;
