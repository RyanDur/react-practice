import * as React from 'react';
import {Row, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {DraggableProps} from './state/connector';

export const Draggable = ({columns, totals, rows}: DraggableProps) => {
  return <TotalsTable draggable={true} columns={columns} totals={totals} id='draggable'>
    <tbody>
    {rows.map(row => <Row key={row.name}
                          draggable={true}
                          columns={columns}
                          dataFormatter={catFormatter}
                          data={row.data}>
      <td draggable={true}>{row.name}</td>
    </Row>)}
    </tbody>
  </TotalsTable>;
};
