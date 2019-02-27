import {Dispatch, Middleware} from 'redux';
import {AppAction} from '../actions';
import {AppState} from './AppState';

export type AppMiddleware = Middleware<any, AppState, Dispatch<AppAction>>
