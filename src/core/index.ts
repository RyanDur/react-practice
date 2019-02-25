import {AppMiddleware} from '../types';
import {CoreState} from './types';
import {clientConnector} from './clientConnector';
import {socketMiddleware} from './middleware';
import {reducer as core} from './reducer';
import {CoreAction} from './action';

export const reducers = {
  core
};

export const middleware: AppMiddleware[] = [
  socketMiddleware(clientConnector(new WebSocket('ws://localhost:8999')))
];

export {CoreAction, CoreState};
