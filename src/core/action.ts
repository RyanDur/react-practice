import {Action, Dispatch} from 'redux';
import {AppAction} from '../actions';
import {dataAction} from './types';
import {DataResponse, ResponseData} from './types/DataResponse';

export enum socketAction {
  CONNECT = 'CONNECT',
  STOP = 'STOP'
}

export type ConnectAction = Action<socketAction.CONNECT>;

export type StopAction = Action<socketAction.STOP>;

export interface DataAction extends Action<dataAction.DATA> {
  response: {
    data: ResponseData[];
    columns: string[];
    rows: string[];
  };
}

export type SocketAction = ConnectAction | StopAction;

export type CoreAction = SocketAction | DataAction;

export const connectToData = (dispatch: Dispatch<AppAction>) => ({data, columnNames, rowNames}: DataResponse) => dispatch(
  {
    type: dataAction.DATA, response: {
      data,
      columns: columnNames,
      rows: rowNames
    }
  });
