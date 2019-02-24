import * as React from 'react';

interface ColumnProps {
  columns: string[];
}

export const Columns = ({columns}: ColumnProps) =>
  <thead>
  <tr>
    <th>Columns:</th>
    {columns.map(column => <th
      key={`${column}-header`}
      className='header title'>{column}</th>)}
  </tr>
  </thead>;
