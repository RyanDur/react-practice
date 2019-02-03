import {Action} from 'redux';
import {dataAction} from './types';

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

export interface TableDataAction extends Action {
  type: dataAction.DATA;
  data?: any;
}

export type SocketAction = ConnectAction | StopAction;

export type DataAction = TableDataAction;
