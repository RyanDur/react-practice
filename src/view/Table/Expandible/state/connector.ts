import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../../../../types';
import {columns, totals} from '../../Base/store/selectors';
import {Data} from '../../data/types';
import {ExpandableRow} from '../../element/types/row';
import {Expandable} from '../Expandable';
import {CollapsibleAction, toggleOpen} from './actions';
import {expandableRows} from './selectors';

export interface ExpandableStateProps {
  columns: string[];
  rows: ExpandableRow[];
  totals: Data<number>;
}

export interface ExpandableDispatchProps {
  toggleOpen: (selection: string) => void;
}

export default connect<ExpandableStateProps, ExpandableDispatchProps>((state: AppState) => ({
  columns: columns(state),
  rows: expandableRows(state),
  totals: totals(state)
}), (dispatch: Dispatch<CollapsibleAction>) => ({
  toggleOpen: toggleOpen(dispatch)
}))(Expandable);
