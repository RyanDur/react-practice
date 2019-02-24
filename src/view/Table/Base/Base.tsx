import * as React from 'react';
import {Data} from '../../../core/types';
import {CatRow, TotalsTable} from '../elements';

interface BaseProps {
  columns: string[];
  rows: Array<{ name: string, data: Data<number> }>;
  totals: Data<number>;
}

export const Base = ({columns, rows, totals}: BaseProps) =>
  <TotalsTable id='base' columns={columns} totals={totals}>
    <tbody>
    {rows.map(row =>
      <CatRow key={`${row.name}-base`} columns={columns} row={row}>
        <td>{row.name}</td>
      </CatRow>)}
    </tbody>
  </TotalsTable>;
