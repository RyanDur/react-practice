import {default as errorBoundary, ErrorState} from './reducer';
import {ErrorAction} from './actions';
import {default as ErrorBoundary} from './connector';

export interface ErrState {
  errorBoundary: ErrorState;
}

export {errorBoundary, ErrorAction, ErrorBoundary};
