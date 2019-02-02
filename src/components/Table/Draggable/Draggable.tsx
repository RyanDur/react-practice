import * as React from 'react';
import {Component} from 'react';
import {DraggableProps} from './connector';

export class Draggable extends Component<DraggableProps> {
  public render() {
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
        <tr key={row.name}>
          <td draggable={true}>{row.name}</td>
          {columns.map((column) =>
            <td data-group={column} key={column}>row.data[column]</td>
          )}
        </tr>
      )}
      </tbody>
      <tfoot>
      <tr>
        <td>Totals:</td>
        {columns.map((column) =>
          <td data-group={column} key={column}>{totals[column]}</td>
        )}
      </tr>
      </tfoot>
    </table>;
  }
}
