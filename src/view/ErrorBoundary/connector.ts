import {ErrorInfo} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../../types';
import {errorAction, ErrorAction} from './actions';
import {ErrorBoundary} from './ErrorBoundary';

interface ErrorBoundaryStateProps {
  error: Error;
  info: ErrorInfo;
}
interface ErrorBoundaryDispatchProps {
  setError: (error: Error, info: ErrorInfo) => void;
}

export default connect<ErrorBoundaryStateProps, ErrorBoundaryDispatchProps>(
  (state: AppState) => ({
    error: state.errorBoundary.error,
    info: state.errorBoundary.info
  }),
  (dispatch: Dispatch<ErrorAction>) => ({
    setError:  (error, info) => dispatch({type: errorAction.ERROR, error, info})
  })
)(ErrorBoundary);
