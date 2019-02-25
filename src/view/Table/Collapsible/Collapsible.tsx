import * as React from 'react';
import {Data} from '../../../core/types';
import {CatRow, SelectableHeader, TotalsTable} from '../elements';
import {CollapsibleRow} from '../elements/types';

interface CollapsibleProps {
  columns: string[];
  rows: CollapsibleRow[];
  totals: Data<number>;
  toggleOpen: (selection: string) => void;
}

export const Collapsible = ({totals, rows, toggleOpen, columns}: CollapsibleProps) =>
  <TotalsTable id='collapsible' totals={totals} columns={columns}>
    <tbody>
    {rows.map((row) => {
      if (row.subRows) {
        return <CatRow key={`${row.name}-collapsible`} columns={columns} row={row}>
          <td>{row.name}</td>
        </CatRow>;
      } else {
        return <CatRow key={`${row.name}-collapsible`} columns={columns} row={row}>
          <SelectableHeader
            value={row}
            handleSelect={toggleOpen}/>
        </CatRow>;
      }
    })}
    </tbody>
  </TotalsTable>;
