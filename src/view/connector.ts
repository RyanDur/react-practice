import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import App from './App';
import {socketAction} from './Table/data/action';

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
