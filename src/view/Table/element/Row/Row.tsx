import * as React from 'react';
import {ReactNode} from 'react';
import {Data} from '../../data/types';

interface CatRowProps {
  children: ReactNode | ReactNode[];
  columns: string[];
  data: Data<number>;
  dataFormatter?: (a: number) => ReactNode;
  handleClick?: () => void;
}

export const Row = ({children, columns, data, dataFormatter = (a: any) => a, handleClick}: CatRowProps) => {
  return <tr>
    {children}
    {columns.map((column: string) =>
      <td key={column}
          onClick={handleClick}
          data-group={column}>{dataFormatter(data[column])}</td>)}
  </tr>;
};
