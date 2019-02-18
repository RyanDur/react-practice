import {connect} from 'react-redux';
import {Data} from '../../../../core/types';
import {AppState} from '../../../../store';
import {sumColumns} from '../../../helpers';
import {Totals} from './Totals';

export interface TotalsState {
  totals: Data<number>;
  columns: string[];
}

export type TotalsProps = TotalsState;

export default connect<TotalsState>(
  ({components, core}: AppState) => ({
    totals: sumColumns(
      components.fancy.selected.map((row) => core.data[row] || {}),
      components.fancy.columns.active
    ),
    columns: components.fancy.columns.active
  })
)(Totals);
