import {connect} from 'react-redux';
import FancyTable from './FancyTable';
import {Action, Dispatch} from "redux";
import {AppState} from "../../store";
import {socketAction} from "../../core/action";
import {tableAction} from "./actions";

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