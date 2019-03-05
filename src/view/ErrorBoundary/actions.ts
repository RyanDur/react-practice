import {ErrorInfo} from 'react';
import {Action} from 'redux';

export enum errorAction {
  ERROR = 'ERROR'
}

export interface ErrorAction extends Action<errorAction.ERROR> {
  error: Error;
  info: ErrorInfo;
}
