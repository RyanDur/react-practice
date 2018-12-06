import {connect} from 'react-redux';
import FancyTable from './FancyTable';
import {Action, Dispatch} from 'redux';
import {socketAction} from '../../core/action';

interface TableStateProps {
}

interface TableDispatchProps {
  connect: () => void;
}

export type TableProps = TableStateProps & TableDispatchProps;

export default connect<TableStateProps, TableDispatchProps>(
  () => ({}),
  (dispatch: Dispatch<Action>): TableDispatchProps => ({
    connect: () => dispatch({type: socketAction.CONNECT})
  })
)(FancyTable);