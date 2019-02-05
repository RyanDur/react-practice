import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {Row} from '../../../../core/types';
import {AppState} from '../../../../store';
import {tableAction} from '../../actions';
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
    rows: data.rows.map((row: Row) =>
      ({...row,
        ...(data.rows.find((checkedRow: CheckedRow) => row.name === checkedRow.name) || {})})),
    columns: components.table.fancy.columns.active
  }),
  (dispatch: Dispatch<Action>): RowDispatchProps => ({
    toggleChecked: (row: CheckedRow) => dispatch({type: tableAction.TOGGLE_CHECKED, row})
  })
)(Rows);
