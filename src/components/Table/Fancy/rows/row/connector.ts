import {connect} from 'react-redux';
import {Row} from './Row';
import {Row as RowType} from '../../../../../core/types';
import {Dispatch} from 'redux';
import {tableAction, TableAction} from '../../../actions';
import {AppState} from '../../../../../store';

interface RowState {
  columns: string[];
}

export interface RowDispatch {
  toggleChecked: (row: RowType) => void;
}

export type RowProps = RowState & RowDispatch;

export default connect<RowState, RowDispatch>(
  ({table}: AppState) => ({
    columns: table.fancy.columns.active
  }),
  (dispatch: Dispatch<TableAction>): RowDispatch => ({
    toggleChecked: (row: RowType) => dispatch({type: tableAction.TOGGLE_CHECKED, row})
  })
)(Row);
