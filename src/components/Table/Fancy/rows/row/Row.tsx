import {Component} from 'react';
import {Data} from '../../../../../core/types';
import {TableData} from '../../elements/TableData';
import {Checkbox} from '../../elements/Checkbox';
import {TableRow} from '../../elements/TableRow';
import * as React from 'react';
import {CheckedRow} from '../../types';
import {RowProps} from './connector';

export interface Props {
  index: number;
  row: CheckedRow;
  defaultCheck: boolean;
}

export class Row extends Component<RowProps & Props> {

  createData = (data: Data = {}) => (column: string, i: number) =>
    <TableData
      key={i}
      id={`row-data-${column}-${i}`}
      className={'row-cell'}
      column={column}>{data[column] || '—'}</TableData>;

  handleChecked = (row: CheckedRow) => (): void =>
    this.props.toggleChecked(row);

  componentDidMount() {
    if (this.props.defaultCheck) {
      this.props.toggleChecked(this.props.row);
    }
  }

  render() {
    const {index, row, columns} = this.props;
    return <TableRow>
      <TableData className='row-header stick-left gray'>
        <Checkbox index={index}
                  label={row.name}
                  checked={row.checked || this.props.defaultCheck}
                  change={this.handleChecked(row)}/>
      </TableData>
      {columns.map(this.createData(row.data))}
    </TableRow>;
  }
}
