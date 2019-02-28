import * as React from 'react';
import {Data} from '../../../core/types';
import {CollapsibleRow, Row, TotalsTable, SelectableHeader} from '../element';
import {catFormatter} from '../element/cats';
import {CollapsedRow} from '../element/types';

export interface CollapsibleProps {
  columns: string[];
  rows: CollapsedRow[];
  totals: Data<number>;
  toggleOpen: (selection: string) => void;
}

export const Collapsible = ({totals, rows, toggleOpen, columns}: CollapsibleProps) =>
  <TotalsTable id='collapsible' totals={totals} columns={columns}>
    <tbody>
    {rows.map((row) => {
      if (row.subRows) {
        return <CollapsibleRow key={`${row.name}-collapsible`}
                               dataFormatter={catFormatter}
                               columns={columns}
                               data={row.data}
                               open={row.selected}
                               handleOpen={() => toggleOpen(row.name)}
                               subData={row.subRows}>
          <td><SelectableHeader classes={['row-header']}
                                handleSelect={toggleOpen}
                                id={'collapsible'}
                                value={row}/></td>
        </CollapsibleRow>;
      } else {
        return <Row key={`${row.name}-collapsible`}
                    dataFormatter={catFormatter}
                    columns={columns}
                    data={row.data}>
          <td className='row-header'>{row.name}</td>
        </Row>;
      }
    })}
    </tbody>
  </TotalsTable>;
