import * as React from 'react';
import {Component} from 'react';
import {TableRow} from '../elements/TableRow';
import {TableFooter} from '../elements/TableFooter';
import {TableData} from '../elements/TableData';
import {Data} from '../../types';
import {TotalsProps} from './connector';

export class Totals extends Component<TotalsProps> {
  totals = (totals: Data = {}, columns: string[]) =>
    columns.map((column: string, index: number) =>
      <TableData
        className={'total stick-bottom gray'}
        id={`table-data-footer-${index}`}
        column={column}
        key={index}>{totals[column] || '—'}</TableData>);

  render() {
    const {totals, columns} = this.props;
    return <TableFooter>
      <TableRow>
        <TableData className={'stick-bottom stick-left gray corner'}>Totals:</TableData>
        {this.totals(totals, columns)}
      </TableRow>
    </TableFooter>;
  }
}
