import * as React from 'react';
import {Component} from 'react';
import {Data} from '../../../core/types';

interface BaseProps {
  columns: string[];
  rows: Array<{name: string, data: Data<number>}>;
  totals: Data<number>;
}

export class Base extends Component<BaseProps> {

  render() {
    const {columns, rows, totals} = this.props;
    return <table>
      <thead>
      <tr>
        <th>Header</th>
        {columns.map(column => <th key={`${column}-header`}>{column}</th>)}
      </tr>
      </thead>
      <tbody>{
        rows.map(row => <tr key={row.name}>
          <td>{row.name}</td>
          {columns.map((column, index) => <td key={`${column}-${index}-row`}>{row.data[column]}</td>)}
        </tr>)}</tbody>
      <tfoot>
      <tr>
        <td>Footer</td>
        {columns.map(column => <td key={`${column}-footer`}>{totals[column]}</td>)}
      </tr>
      </tfoot>
    </table>;
  }
}
