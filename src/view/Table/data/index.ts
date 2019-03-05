import {AppMiddleware} from '../../../types';
import {clientConnector} from './clientConnector';
import {socketMiddleware} from './middleware';
import {reducer as data} from './reducer';
import {CoreAction} from './action';

export const middleware: AppMiddleware = socketMiddleware(clientConnector(new WebSocket('ws://localhost:8999')));

export {CoreAction, data};
