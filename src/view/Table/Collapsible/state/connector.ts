import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../../../../types';
import {columns, totals} from '../../Base/store/selectors';
import {Collapsible} from '../Collapsible';
import {CollapsibleAction, toggleOpen} from './actions';
import {collapsibleRows} from './selectors';

export default connect((state: AppState) => ({
  columns: columns(state),
  rows: collapsibleRows(state),
  totals: totals(state)
}), (dispatch: Dispatch<CollapsibleAction>) => ({
  toggleOpen: toggleOpen(dispatch)
}))(Collapsible);
