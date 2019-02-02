import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {socketAction} from '../../../core/action';
import FancyTable from './FancyTable';

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
