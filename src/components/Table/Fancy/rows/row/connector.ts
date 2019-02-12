import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Row as RowType} from '../../../../../core/types';
import {AppState} from '../../../../../store';
import {fancyAction, FancyAction} from '../../actions';
import {CheckedRow} from '../../types';
import {Row} from './Row';

interface RowState {
  columns: string[];
}

export interface RowDispatch {
  toggleChecked: (row: CheckedRow) => void;
}

export type RowProps = RowState & RowDispatch;

export default connect<RowState, RowDispatch>(
  ({components}: AppState) => ({
    columns: components.fancy.columns.active
  }),
  (dispatch: Dispatch<FancyAction>): RowDispatch => ({
    toggleChecked: (row: RowType) => dispatch({type: fancyAction.TOGGLE_CHECKED, row})
  })
)(Row);
