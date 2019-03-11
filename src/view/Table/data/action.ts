import {Action, Dispatch} from 'redux';
import {AppAction} from '../../../actions';
import {DataResponse, ResponseData} from './types/DataResponse';

export enum socketAction {
  CONNECT = 'CONNECT',
  STOP = 'STOP'
}

export type ConnectAction = Action<socketAction.CONNECT>;

export type StopAction = Action<socketAction.STOP>;

export enum dataAction {
  DATA = 'DATA'
}

export interface DataAction extends Action<dataAction.DATA> {
  data: ResponseData[];
  columnNames: string[];
  rowNames: string[];
}

export type SocketAction = ConnectAction | StopAction;

export type CoreAction = SocketAction | DataAction;

export const connectToData = (dispatch: Dispatch<AppAction>) => ({data, columnNames, rowNames}: DataResponse) =>
  dispatch({
    type: dataAction.DATA,
    data,
    columnNames,
    rowNames
  });
