import {connect} from 'react-redux';
import {Totals} from './Totals';
import {AppState} from '../../../store';
import {Dispatch} from 'redux';
import {tableAction, TableAction} from '../actions';
import {Data, Row} from '../TableState';

export interface TotalsStateProps {
  totals: Data;
  columns: string[];
  rows: Row[]
}

export interface TotalsDispatchProps {
  updateTotals: () => void
}

export type TotalsProps = TotalsStateProps & TotalsDispatchProps;

export default connect<TotalsStateProps, TotalsDispatchProps>(
  ({table}: AppState) => ({
    totals: table.totals,
    columns: table.columns,
    rows: table.rows
  }),
  (dispatch: Dispatch<TableAction>) => ({
    updateTotals: () => dispatch({type: tableAction.UPDATE_TOTALS})
  })
)(Totals)