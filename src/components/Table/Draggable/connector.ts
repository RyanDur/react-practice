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
    totals: sumColumns(Object.values(data.rows), components.fancy.columns.active),
    columns: components.fancy.columns.active,
    rows: Object.values(data.rows)
  })
)(Draggable);
