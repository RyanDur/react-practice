import {ErrorInfo} from 'react';
import {ErrorAction, errorAction} from './actions';

export interface ErrorState {
  error?: Error;
  info?: ErrorInfo;
}

export default (
  state: ErrorState = {},
  action: ErrorAction
) => {
  switch (action.type) {
  case errorAction.ERROR:
    return {error: action.error, info: action.info};
  default:
    return state;
  }
};
