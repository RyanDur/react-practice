import {connect} from 'react-redux';
import FancyTable from './FancyTable';
import {Action, Dispatch} from "redux";
import {AppState} from "../../store";
import {socketAction} from "../../core/action";
import {tableAction} from "./actions";

interface TableStateProps {
  columns: string[];
}

interface TableDispatchProps {
  connect: () => void;
  setDefaultCheck: (checked: boolean) => void
}

export type TableProps = TableStateProps & TableDispatchProps;

export default connect<TableStateProps, TableDispatchProps>(
  ({table}: AppState): TableStateProps => ({
    columns: table.columns
  }),
  (dispatch: Dispatch<Action>): TableDispatchProps => ({
    connect: () => dispatch({type: socketAction.CONNECT}),
    setDefaultCheck: (checked: boolean) =>
      dispatch({type: tableAction.SET_DEFAULT_CHECKED, checked})
  })
)(FancyTable);