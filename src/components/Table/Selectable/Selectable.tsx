import * as React from 'react';
import {SelectableProps} from './connector';
import {SelectableRow} from './SelectableRow/SelectableRow';

export interface ManuallyDefinedProps {
  defaultSelected: boolean;
}

export const Selectable = ({columns, totals, rows, defaultSelected, toggleSelect}: SelectableProps & ManuallyDefinedProps) =>
  (
    <table id='selectable'>
      <thead>
      <tr>
        <th>Headers:</th>
        {columns.map(column =>
          <th key={`${column}-header`} className='column-header'>{column}</th>)}
      </tr>
      </thead>
      <tbody>
      {rows.map(row => <SelectableRow
        key={`${row.name}-row`}
        selection={row.name}
        selected={row.selected}
        defaultSelected={defaultSelected}
        handleSelect={toggleSelect}>
        {columns.map(column =>
          <td key={`${column}-${row.name}-row-data`}>{row.data[column]}</td>)}
      </SelectableRow>)}
      </tbody>
      <tfoot>
      <tr>
        <th>Totals:</th>
        {columns.map(column => <td key={`${column}-Footer`}>{totals[column]}</td>)}
      </tr>
      </tfoot>
    </table>
  );
