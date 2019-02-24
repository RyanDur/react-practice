import * as React from 'react';
import {ReactNode} from 'react';
import {Data} from '../../../../core/types';
import {cats} from './cats';

interface CatRowProps {
  children: ReactNode | ReactNode[];
  columns: string[];
  row: {data: Data<number>};
}

export const CatRow = ({children, columns, row}: CatRowProps) => {
  return <tr>
    {children}
    {columns.map((column: string) =>
      <td key={column} data-group={column}>{cats[row.data[column]] || '—'}</td>)}
  </tr>;
};
