import * as React from 'react';
import {Data} from '../../../core/types';
import {Row} from '../elements/Row/Row';
import {TotalsTable} from '../elements/TotalsTable/TotalsTable';

interface BaseProps {
  columns: string[];
  rows: Array<{ name: string, data: Data<number> }>;
  totals: Data<number>;
}

export const Base = ({columns, rows, totals}: BaseProps) =>
  <TotalsTable id='base' columns={columns} totals={totals}>
    <tbody>
    {rows.map(row =>
      <Row
        key={row.name}
        columns={columns}
        data={row.data}>
        <td>{row.name}</td>
      </Row>)}
    </tbody>
  </TotalsTable>;
