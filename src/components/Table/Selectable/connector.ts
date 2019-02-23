import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Data} from '../../../core/types';
import {AppState} from '../../../store';
import {Selectable} from './Selectable';
import {SelectableAction, toggleSelect} from './store/actions';
import {columns, selectableRows, selectedTotals} from './store/selectors';
import {Selected} from './types/Selectable';

export interface SelectableStateProps {
  columns: string[];
  rows: Selected[];
  totals: Data<number>;
}

export interface SelectableDispatchProps {
  toggleSelect: (row: string) => void;
}

export type SelectableProps = SelectableStateProps & SelectableDispatchProps;

export default connect<SelectableStateProps, SelectableDispatchProps>(
  (state: AppState) => ({
    columns: columns(state),
    rows: selectableRows(state),
    totals: selectedTotals(state)
  }),
  (dispatch: Dispatch<SelectableAction>) => ({
    toggleSelect: toggleSelect(dispatch)
  })
)(Selectable);
