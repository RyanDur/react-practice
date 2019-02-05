import {connect} from 'react-redux';
import {Data} from '../../../../core/types';
import {AppState} from '../../../../store';
import {sumColumns} from '../../helpers';
import {Totals} from './Totals';

export interface TotalsState {
  totals: Data;
  columns: string[];
}

export type TotalsProps = TotalsState;

export default connect<TotalsState>(
  ({components, data}: AppState) => ({
    totals: sumColumns(data.rows, components.fancy.columns.active),
    columns: components.fancy.columns.active
  })
)(Totals);
