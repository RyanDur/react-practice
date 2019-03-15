import {connect} from 'react-redux';
import {AppState} from '../../../../types';
import {columns, rows, totals} from '../../Base/store/selectors';
import {Data} from '../../data/types';
import {HeaderRow} from '../../element/types/row';
import {Draggable} from '../Draggable';

export interface DraggableProps {
  columns: string[];
  rows: HeaderRow[];
  totals: Data<number>;
}

export default connect<DraggableProps>((state: AppState) => ({
  columns: columns(state),
  rows: rows(state),
  totals: totals(state)
}))(Draggable);
