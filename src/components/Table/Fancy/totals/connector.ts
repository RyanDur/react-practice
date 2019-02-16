import {connect} from 'react-redux';
import {Data} from '../../../../core/types';
import {AppState} from '../../../../store';
import {sumColumns} from '../../../helpers';
import {Selected} from '../types/Selected';
import {Totals} from './Totals';

export interface TotalsState {
  totals: Data;
  columns: string[];
}

export type TotalsProps = TotalsState;

export default connect<TotalsState>(
  ({components, data}: AppState) => ({
    totals: sumColumns(
      components.fancy.rows
        .map((row: Selected) => data.data[row.name] || {}),
      components.fancy.columns.active
    ),
    columns: components.fancy.columns.active
  })
)(Totals);
