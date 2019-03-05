import {connect} from 'react-redux';
import {AppState} from '../../../../types';
import {Data} from '../../data/types';
import {HeaderRow} from '../../element/types/row';
import {Base} from '../Base';
import {columns, rows, totals} from './selectors';

export interface BaseProps {
  columns: string[];
  rows: HeaderRow[];
  totals: Data<number>;
}

export default connect<BaseProps>((state: AppState) => ({
  columns: columns(state),
  rows: rows(state),
  totals: totals(state)
}))(Base);
