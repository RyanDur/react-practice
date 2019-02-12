import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {AppState} from '../../../../store';
import {fancyAction} from '../actions';
import {CheckedRow} from '../types';
import {Rows} from './Rows';

interface RowsStateProps {
  rows: CheckedRow[];
  columns: string[];
}

interface RowDispatchProps {
  toggleChecked: (row: CheckedRow) => void;
}

export type RowsProps = RowsStateProps & RowDispatchProps;

export default connect<RowsStateProps, RowDispatchProps>(
  ({components, data}: AppState): RowsStateProps => ({
    rows: components.fancy.rows.map(checkedRow =>
      ({...checkedRow, ...(data.rows[checkedRow.name] || {})})),
    columns: components.fancy.columns.active
  }),
  (dispatch: Dispatch<Action>): RowDispatchProps => ({
    toggleChecked: (row: CheckedRow) => dispatch({type: fancyAction.TOGGLE_CHECKED, row})
  })
)(Rows);
