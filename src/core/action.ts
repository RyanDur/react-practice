import {Action} from 'redux';

export enum socketAction {
  CONNECT = 'CONNECT',
  STOP = 'STOP'
}

export interface ConnectAction extends Action {
  type: socketAction.CONNECT;
}

export interface StopAction extends Action {
  type: socketAction.STOP;
}

export type SocketAction = ConnectAction | StopAction;
