import * as React from 'react';
import {Data} from '../../../core/types';
import {Row, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {CollapsibleRow} from '../element/types';

interface CollapsibleProps {
  columns: string[];
  rows: CollapsibleRow[];
  totals: Data<number>;
  toggleOpen: (selection: string) => void;
}

export const Collapsible = ({totals, rows, toggleOpen, columns}: CollapsibleProps) =>
  <TotalsTable id='collapsible' totals={totals} columns={columns}>
    <tbody>
    {rows.map((row) =>
      <Row key={`${row.name}-collapsible`}
           dataFormatter={catFormatter}
           columns={columns}
           data={row.data}>
        <td className='row-header'>{row.name}</td>
      </Row>)}
    </tbody>
  </TotalsTable>;
