import {connect} from 'react-redux';
import {AppState} from '../../../../store';
import {columns, totals} from '../../Base/store/selectors';
import {Collapsible} from '../Collapsible';
import {collapsibleRows} from './selectors';

export default connect((state: AppState) => ({
  columns: columns(state),
  rows: collapsibleRows(state),
  totals: totals(state)
}))(Collapsible);
