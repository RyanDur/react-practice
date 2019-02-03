import * as React from 'react';
import {Component, DragEvent} from 'react';
import {cats} from '../cats';
import {DraggableProps} from './connector';

export class Draggable extends Component<DraggableProps> {

  handleDragHeaderEnter = (event: DragEvent) => {
    console.log(event.pageX);
    console.log(event.currentTarget.getClientRects());
  };

  render() {
    const {columns, rows, totals} = this.props;
    return <table>
      <thead>
      <tr>
        <th>Header:</th>
        {columns.map((column) =>
          <th
            key={column}
            data-group={column}
            onDragEnter={this.handleDragHeaderEnter}
            draggable={true}>{column}</th>
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
