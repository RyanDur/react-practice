import {connect} from "react-redux";
import {Rows} from "./Rows";
import {AppState} from "../../../store";
import {Row} from "../TableState";
import {Action, Dispatch} from "redux";
import {tableAction} from "../actions";

interface RowsStateProps {
  rows: Row[]
  columns: string[]
  defaultChecked: boolean
}

interface RowDispatchProps {
  toggleChecked: (row: Row) => void
}

export type RowsProps = RowsStateProps & RowDispatchProps;

export default connect<RowsStateProps, RowDispatchProps>(
  ({table}: AppState): RowsStateProps => ({
    rows: table.rows,
    columns: table.columns,
    defaultChecked: table.defaultChecked
  }),
  (dispatch: Dispatch<Action>): RowDispatchProps => ({
    toggleChecked: (row: Row) => dispatch({type: tableAction.TOGGLE_CHECKED, row})
  })
)(Rows)