import {default as errorBoundary, ErrorState} from './reducer';
import {ErrorAction} from './actions';

export interface ErrState {
  errorBoundary: ErrorState;
}

export {errorBoundary, ErrorAction};
