import * as React from 'react';
import {ReactNode} from 'react';
import {Data} from '../../../../core/types';

interface CatRowProps {
  children: ReactNode | ReactNode[];
  columns: string[];
  data: Data<number>;
  dataFormatter: (a: number) => ReactNode;
}

export const Row = ({children, columns, data, dataFormatter}: CatRowProps) => {
  return <tr>
    {children}
    {columns.map((column: string) =>
      <td key={column} data-group={column}>{dataFormatter(data[column])}</td>)}
  </tr>;
};
