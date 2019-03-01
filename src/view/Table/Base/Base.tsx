import * as React from 'react';
import {Data} from '../data/types';
import {Row, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {HeaderRow} from '../element/types';

interface BaseProps {
  columns: string[];
  rows: HeaderRow[];
  totals: Data<number>;
}

export const Base = ({columns, rows, totals}: BaseProps) =>
  <TotalsTable id='base' columns={columns} totals={totals}>
    <tbody>
    {rows.map(row =>
      <Row key={`${row.name}-base`}
           dataFormatter={catFormatter}
           columns={columns}
           data={row.data}>
        <td className='row-header'>{row.name}</td>
      </Row>)}
    </tbody>
  </TotalsTable>;
