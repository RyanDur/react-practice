import * as React from 'react';
import {ReactNode} from 'react';
import {Data} from '../../data/types';

interface CatRowProps {
  children: ReactNode | ReactNode[];
  columns: string[];
  data: Data<number>;
  draggable?: boolean;
  dataFormatter?: (a: number) => ReactNode;
  handleClick?: () => void;
}

export const Row = (
  {
    children,
    columns = [],
    data = {},
    draggable = false,
    handleClick,
    dataFormatter = (a: any) => a
  }: CatRowProps) =>
  <tr>
    {children}
    {columns.map((column: string) =>
      <td key={column}
          draggable={draggable}
          onClick={handleClick}
          data-group={column}>{dataFormatter(data[column])}</td>)}
  </tr>;
