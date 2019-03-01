import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../../../../types';
import {columns, totals} from '../../Base/store/selectors';
import {Expandable} from '../Expandable';
import {CollapsibleAction, toggleOpen} from './actions';
import {expandableRows} from './selectors';

export default connect((state: AppState) => ({
  columns: columns(state),
  rows: expandableRows(state),
  totals: totals(state)
}), (dispatch: Dispatch<CollapsibleAction>) => ({
  toggleOpen: toggleOpen(dispatch)
}))(Expandable);
