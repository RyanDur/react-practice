import {Action} from 'redux';
import {Data, dataAction} from './types';

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
  data?: Data[];
}

export type SocketAction = ConnectAction | StopAction;

export type DataAction = TableDataAction;
