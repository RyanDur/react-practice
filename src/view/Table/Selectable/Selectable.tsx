import * as React from 'react';
import {CatRow, SelectableHeader, TotalsTable} from '../elements';
import {SelectableProps} from './store/connector';

export interface ManuallyDefinedProps {
  defaultSelected: boolean;
}

export const Selectable = ({totals, rows, toggleSelect, defaultSelected, columns}: SelectableProps & ManuallyDefinedProps) =>
  <TotalsTable id='selectable' totals={totals} columns={columns}>
    <tbody>
    {rows.map(row =>
      <CatRow key={`${row.name}-selectable`} columns={columns} row={row}>
        <SelectableHeader
          value={row}
          handleSelect={toggleSelect}
          defaultSelected={defaultSelected}/>
      </CatRow>)}
    </tbody>
  </TotalsTable>;
