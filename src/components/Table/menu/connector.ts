import {connect} from 'react-redux';
import {AppState} from '../../../store';
import {Dispatch} from 'redux';
import {tableAction, TableAction} from '../actions';
import {Menu} from './Menu';
import {Direction, MenuDispatchProps, MenuStateProps} from './types';

export default connect<MenuStateProps, MenuDispatchProps>(
  ({table}: AppState) => ({
    columns: table.columns
  }),
  (dispatch: Dispatch<TableAction>) => ({
    add: (side: Direction, column: string, columns: string[]) =>
      dispatch({type: tableAction.ADD_COLUMNS, side, column, columns}),
    remove: (columns: string[]) =>
      dispatch({type: tableAction.REMOVE_COLUMNS, columns})
  })
)(Menu);