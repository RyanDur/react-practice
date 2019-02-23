import {connect} from 'react-redux';
import {AppState} from '../../../../store';
import {Base} from '../Base';
import {columns, rows, totals} from './selectors';

export default connect((state: AppState) => ({
  columns: columns(state),
  rows: rows(state),
  totals: totals(state)
}))(Base);
