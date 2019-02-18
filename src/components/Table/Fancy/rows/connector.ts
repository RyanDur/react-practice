import {connect} from 'react-redux';
import {AppState} from '../../../../store';
import {Selected} from '../types';
import {Rows} from './Rows';

interface RowsStateProps {
  rows: Selected[];
  columns: string[];
}

export type RowsProps = RowsStateProps;

export default connect<RowsStateProps>(
  ({components, core}: AppState): RowsStateProps => ({
    rows: components.fancy.rows.map(row => ({
      name: row,
      selected: components.fancy.selected.includes(row),
      data: core.data[row]
    })),
    columns: components.fancy.columns.active
  })
)(Rows);
