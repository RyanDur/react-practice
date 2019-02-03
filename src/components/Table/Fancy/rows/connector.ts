import {connect} from 'react-redux';
import {Row} from '../../../../core/types';
import {tableAction} from '../../actions';
import {Rows} from './Rows';
import {Action, Dispatch} from 'redux';
import {AppState} from '../../../../store';

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
    rows: data.rows,
    columns: table.columns.active
  }),
  (dispatch: Dispatch<Action>): RowDispatchProps => ({
    toggleChecked: (row: Row) => dispatch({type: tableAction.TOGGLE_CHECKED, row})
  })
)(Rows);
