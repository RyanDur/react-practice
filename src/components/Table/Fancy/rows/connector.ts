import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {Row} from '../../../../core/types';
import {AppState} from '../../../../store';
import {tableAction} from '../../actions';
import {Rows} from './Rows';

interface RowsStateProps {
  rows: Row[];
  columns: string[];
}

interface RowDispatchProps {
  toggleChecked: (row: Row) => void;
}

export type RowsProps = RowsStateProps & RowDispatchProps;

export default connect<RowsStateProps, RowDispatchProps>(
  ({table, data}: AppState): RowsStateProps => ({
    rows: data.rows.map((row: Row) =>
      ({...table.fancy.rows.find(checkedRow => row.name === checkedRow.name), ...row})),
    columns: table.fancy.columns.active
  }),
  (dispatch: Dispatch<Action>): RowDispatchProps => ({
    toggleChecked: (row: Row) => dispatch({type: tableAction.TOGGLE_CHECKED, row})
  })
)(Rows);
