import * as React from 'react';
import {Row, SelectableHeader, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {SelectableProps} from './store/connector';

export interface ManuallyDefinedProps {
  defaultSelected: boolean;
}

export const Selectable = ({totals, rows, toggleSelect, defaultSelected, columns}: SelectableProps & ManuallyDefinedProps) =>
  <TotalsTable id='selectable' totals={totals} columns={columns}>
    <tbody>
    {rows.map(row =>
      <Row
        key={`${row.name}-selectable`}
        data={row.data}
        columns={columns}
        dataFormatter={catFormatter}>
        <td>
          <SelectableHeader
            classes={['row-header']}
            table={'selectable'}
            value={row}
            handleSelect={toggleSelect}
            defaultSelected={defaultSelected}/>
        </td>
      </Row>)}
    </tbody>
  </TotalsTable>;
