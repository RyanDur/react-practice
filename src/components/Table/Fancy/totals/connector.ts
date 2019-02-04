import {connect} from 'react-redux';
import {Data, Row} from '../../../../core/types';
import {Totals} from './Totals';
import {AppState} from '../../../../store';
import {sumColumns} from '../../helpers';

export interface TotalsState {
  totals: Data;
  columns: string[];
  rows: Row[];
}

export type TotalsProps = TotalsState;

export default connect<TotalsState>(
  ({table, data}: AppState) => ({
    totals: sumColumns(data.rows, table.fancy.columns.active),
    columns: table.fancy.columns.active,
    rows: data.rows
  })
)(Totals);
