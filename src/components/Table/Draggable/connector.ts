import {connect} from 'react-redux';
import {Data, Row} from '../../../core/types';
import {AppState} from '../../../store';
import {sumColumns} from '../helpers';
import {Draggable} from './Draggable';

interface TableStateProps {
  totals: Data;
  columns: string[];
  rows: Row[];
}

export type DraggableProps = TableStateProps;

export default connect<TableStateProps>(
  ({components, data}: AppState) => ({
    totals: sumColumns(data.rows, components.table.fancy.columns.active),
    columns: components.table.fancy.columns.active,
    rows: data.rows
  })
)(Draggable);
