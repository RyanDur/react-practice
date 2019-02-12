import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../../store';
import {FancyAction} from '../index';
import {fancyAction} from '../Table/Fancy/actions';
import {Direction} from '../Table/types';
import {Menu} from './Menu';
import {MenuDispatchProps, MenuStateProps} from './types';

export default connect<MenuStateProps, MenuDispatchProps>(
  ({components}: AppState) => ({
    columns: components.fancy.columns
  }),
  (dispatch: Dispatch<FancyAction>) => ({
    add: (side: Direction, column: string, columns: string[]) =>
      dispatch({type: fancyAction.ADD_COLUMNS, side, column, columns}),
    remove: (columns: string[]) =>
      dispatch({type: fancyAction.REMOVE_COLUMNS, columns})
  })
)(Menu);
