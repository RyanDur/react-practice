import * as React from 'react';
import {Row, Select, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {SelectableProps} from './state/connector';

export interface ManuallyDefinedProps {
  defaultSelected: boolean;
}

export const Selectable = ({totals, rows, toggleSelect, defaultSelected, columns}: SelectableProps & ManuallyDefinedProps) =>
  <TotalsTable id='selectable' totals={totals} columns={columns}>
    <tbody>
    {rows.map(row =>
      <Row key={row.name}
           data={row.data}
           columns={columns}
           dataFormatter={catFormatter}>
        <td>
          <Select classes={['row-header']}
                  id={'selectable'}
                  value={row}
                  handleSelect={toggleSelect}
                  defaultSelected={defaultSelected}/>
        </td>
      </Row>)}
    </tbody>
  </TotalsTable>;
