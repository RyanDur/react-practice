import {ReactNode} from 'react';
import * as React from 'react';
import {Row} from '..';
import {Data} from '../../data/types';
import {catFormatter} from '../cats';

interface CollapsibleRowProps {
  columns: string[];
  data: Data<number>;
  subData: Array<Data<number>>;
  dataFormatter: (data: number) => ReactNode;
  handleOpen: () => void;
  open: boolean;
  children?: ReactNode | ReactNode[];
}

export const CollapsibleRow = ({open, columns, data, subData, handleOpen, children}: CollapsibleRowProps) => {
  return <>
    <Row handleClick={handleOpen}
         columns={columns}
         data={data}>
      {children}
    </Row>
    {open && subData.map((dataRow, index) => <Row
      key={`collapsible-${index}`}
      handleClick={handleOpen}
      columns={columns}
      data={dataRow}
      dataFormatter={catFormatter}>
      <td/>
    </Row>)}
  </>;
};
