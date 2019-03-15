import * as React from 'react';

interface ColumnProps {
  columns: string[];
  draggable?: boolean;
}

export const Columns = ({columns = [], draggable}: ColumnProps) =>
  <thead>
  <tr>
    <th>Columns:</th>
    {columns.map(column => <th
      key={`${column}-header`}
      draggable={draggable}
      className='header title'>{column}</th>)}
  </tr>
  </thead>;
