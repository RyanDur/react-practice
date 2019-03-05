import * as React from 'react';
import {Classes} from '../../types/Classes';
import {Row, Select, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {SelectableProps} from './state/connector';

export interface ManuallyDefinedProps extends Classes {
  defaultSelected: boolean;
}

export const Selectable = ({totals, rows, toggleSelect, defaultSelected, columns, classes}: SelectableProps & ManuallyDefinedProps) =>
  <TotalsTable id='selectable' totals={totals} columns={columns} classes={classes}>
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
