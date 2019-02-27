import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Data} from '../../../../core/types';
import {AppState} from '../../../../types';
import {columns} from '../../Base/store/selectors';
import {SelectedHeaderRow} from '../../element/types';
import {Selectable} from '../Selectable';
import {SelectableAction, toggleSelect} from './actions';
import {selectableRows, selectedTotals} from './selectors';

export interface SelectableStateProps {
  columns: string[];
  rows: SelectedHeaderRow[];
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
