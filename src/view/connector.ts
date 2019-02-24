import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {socketAction} from '../core/action';
import App from './App';

interface AppDispatchProps {
  connect: () => void;
}

export type AppProps = AppDispatchProps;

export default connect(
  () => ({}),
  (dispatch: Dispatch<Action>) => ({
    connect: () => dispatch({type: socketAction.CONNECT})
  }))
  (App);
