import * as React from 'react';
import {ReactNode} from 'react';
import {Data} from '../../../../core/types';

export interface RowProps {
  columns: string[];
  data: Data<number>;
  children?: ReactNode;
}

export const Row = ({columns, data, children}: RowProps) =>
  <tr>
    {children}
    {columns.map(column =>
      <td key={column}>{data[column] || '-'}</td>)}
  </tr>;
