import {connect} from 'react-redux';
import FancyTable from './FancyTable';
import {tableAction} from "./actions";
import {Data, Row, TableAction} from "./reducer";
import {Dispatch} from "redux";
import {AppState} from "../../store";

interface TableStateProps {
  rows: Row[]
  totals: Data
  columns: string[]
}

interface TableDispatchProps {
  updateRows: () => void
  updateTotals: (rows: Row[]) => void
  toggleChecked: (row: Row) => void
}

export type TableProps = TableStateProps & TableDispatchProps;

export default connect<TableStateProps, TableDispatchProps>(
  ({table}: AppState): TableStateProps => ({
    rows: table.rows,
    totals: table.totals,
    columns: table.columns
  }),
  (dispatch: Dispatch<TableAction>): TableDispatchProps => ({
    updateRows: () => dispatch({type: tableAction.TABLE_DATA}),
    updateTotals: (rows: Row[]) => dispatch({type: tableAction.TABLE_TOTALS, rows}),
    toggleChecked: (row: Row) => dispatch({type: tableAction.TOGGLE_CHECKED, row})
  })
)(FancyTable);