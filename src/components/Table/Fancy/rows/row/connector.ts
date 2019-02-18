import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../../../../../store';
import {fancyAction, FancyAction} from '../../actions';
import {Row} from './Row';

interface RowState {
  columns: string[];
}

export interface RowDispatch {
  toggleChecked: (row: string) => void;
}

export type RowProps = RowState & RowDispatch;

export default connect<RowState, RowDispatch>(
  ({components}: AppState) => ({
    columns: components.fancy.columns.active
  }),
  (dispatch: Dispatch<FancyAction>): RowDispatch => ({
    toggleChecked: (row) => dispatch({type: fancyAction.TOGGLE_CHECKED, row})
  })
)(Row);
