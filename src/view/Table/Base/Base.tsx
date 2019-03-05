import * as React from 'react';
import {Row, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {BaseProps} from './store/connector';

export const Base = ({columns, rows, totals}: BaseProps) =>
  <TotalsTable id='base' columns={columns} totals={totals}>
    <tbody>
    {rows.map(row =>
      <Row key={`${row.name}-base`}
           dataFormatter={catFormatter}
           columns={columns}
           data={row.data}>
        <td className='row-header'>{row.name}</td>
      </Row>)}
    </tbody>
  </TotalsTable>;
