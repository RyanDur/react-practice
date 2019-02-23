import {connect} from 'react-redux';
import {Data} from '../../../core/types';
import {AppState} from '../../../store';
import {sumColumns} from '../../helpers';
import {Draggable} from './Draggable';

interface TableStateProps {
  columns: string[];
  rows: Array<{name: string, data: Data<number>}>;
  totals: Data<number>;
}

export type DraggableProps = TableStateProps;

export default connect<TableStateProps>(
  ({base, core}: AppState) => ({
    columns: base.columns,
    rows: base.rows.map(name => ({name, data: core.data[name]})),
    totals: sumColumns(base.rows.map(row => core.data[row]), base.columns)
  })
)(Draggable);
