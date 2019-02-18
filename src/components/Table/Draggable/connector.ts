import {connect} from 'react-redux';
import {Data} from '../../../core/types';
import {AppState} from '../../../store';
import {sumColumns} from '../../helpers';
import {Draggable} from './Draggable';

interface TableStateProps {
  totals: Data<number>;
  columns: string[];
  rows: Array<{name: string, data: Data<number>}>;
}

export type DraggableProps = TableStateProps;

export default connect<TableStateProps>(
  ({components, core}: AppState) => ({
    totals: sumColumns([], components.fancy.columns.active),
    columns: components.fancy.columns.active,
    rows: components.base.rows.map(name => ({name, data: core.data[name]}))
  })
)(Draggable);
