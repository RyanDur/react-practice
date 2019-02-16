import {Action} from 'redux';
import {Data, dataAction} from './types';

export enum socketAction {
  CONNECT = 'CONNECT',
  STOP = 'STOP'
}

export type ConnectAction = Action<socketAction.CONNECT>;

export type StopAction = Action<socketAction.STOP>;

export interface TableDataAction extends Action<dataAction.DATA> {
  response: {
    data: Data[];
    columns: string[];
    rows: string[];
  };
}

export type SocketAction = ConnectAction | StopAction;

export type DataAction = TableDataAction;
