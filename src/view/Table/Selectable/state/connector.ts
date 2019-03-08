import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../../../../types';
import {columns} from '../../Base/store/selectors';
import {Data} from '../../data/types';
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
  toggleSelect: (row: string, selected: boolean) => void;
}

export type SelectableProps = SelectableStateProps & SelectableDispatchProps;

export default connect(
  (state: AppState) => ({
    columns: columns(state),
    rows: selectableRows(state),
    totals: selectedTotals(state)
  }),
  (dispatch: Dispatch<SelectableAction>) => ({
    toggleSelect: toggleSelect(dispatch)
  })
)(Selectable);
