import {connect} from 'react-redux';
import {Totals} from './Totals';
import {Data, Row} from '../../types';
import {AppState} from '../../../../store';
import {sumColumns} from '../../helpers';

export interface TotalsState {
  totals: Data;
  columns: string[];
  rows: Row[];
}

export type TotalsProps = TotalsState;

export default connect<TotalsState>(
  ({table}: AppState) => ({
    totals: sumColumns(table.rows, table.columns.active),
    columns: table.columns.active,
    rows: table.rows
  })
)(Totals);
