import * as React from 'react';
import {Component} from 'react';
import {cats} from '../cats';
import {DraggableProps} from './connector';

export class Draggable extends Component<DraggableProps> {

  render() {
    const {columns, rows, totals} = this.props;
    return <table>
      <thead>
      <tr>
        <th>Header:</th>
        {columns.map((column) =>
          <th data-group={column} key={column} draggable={true}>{column}</th>
        )}
      </tr>
      </thead>
      <tbody>
      {rows.map((row) =>
        <tr key={row.name} draggable={true}>
          <td>{row.name}</td>
          {columns.map((column) =>
            <td data-group={column} key={column}>{cats[row.data[column]]}</td>
          )}
        </tr>
      )}
      </tbody>
      <tfoot>
      <tr>
        <td>Totals:</td>
        {columns.map((column) =>
          <td data-group={column} key={column}>
            {cats[Math.trunc(totals[column] / 10)]}
          </td>
        )}
      </tr>
      </tfoot>
    </table>;
  }
}
