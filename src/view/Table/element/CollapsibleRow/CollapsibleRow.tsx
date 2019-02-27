import {ReactNode} from 'react';
import * as React from 'react';
import {Row} from '..';
import {Data} from '../../../../core/types';
import {catFormatter} from '../cats';

interface CollapsibleRowProps {
  columns: string[];
  data: Data<number>;
  subData: Array<Data<number>>;
  dataFormatter: (data: number) => ReactNode;
  open: boolean;
  children?: ReactNode | ReactNode[];
}

export const CollapsibleRow = ({open, columns, data, subData, children}: CollapsibleRowProps) => {
  return <>
    <Row columns={columns} data={data} dataFormatter={catFormatter}>
      {children}
    </Row>
    {open && subData.map((dataRow, index) => <Row
      key={`collapsible-${index}`}
      columns={columns}
      data={dataRow}
      dataFormatter={catFormatter}>
      <td/>
    </Row>)}
  </>;
};
