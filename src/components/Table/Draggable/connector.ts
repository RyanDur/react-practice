import {connect} from 'react-redux';
import {AppState} from '../../../store';
import {sumColumns} from '../helpers';
import {Data, Row} from '../types';
import {Draggable} from './Draggable';

interface TableStateProps {
  totals: Data;
  columns: string[];
  rows: Row[];
}

export type DraggableProps = TableStateProps;

export default connect<TableStateProps>(
  ({table}: AppState) => ({
    totals: sumColumns(table.rows, table.columns.active),
    columns: table.columns.active,
    rows: table.rows
  })
)(Draggable);
