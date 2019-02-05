import * as React from 'react';
import {Component} from 'react';
import {TableBody} from '../elements/TableBody';
import {CheckedRow} from '../types';
import Row from './row/connector';
import {RowsProps} from './connector';

export interface Default {
  defaultCheck?: boolean;
}

export class Rows extends Component<RowsProps & Default> {

  rows = (rows: CheckedRow[] = []) =>
    rows.map((row: CheckedRow, index) => <Row
      key={index}
      index={index}
      row={row}
      defaultCheck={this.props.defaultCheck}/>);

  render() {
    const {rows} = this.props;
    return <TableBody>
      {this.rows(rows)}
    </TableBody>;
  }
}
