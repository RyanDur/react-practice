import * as React from 'react';
import {Classes} from '../../types/Classes';
import {Row, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {BaseProps} from './store/connector';

export const Base = ({columns, rows, totals, classes}: BaseProps & Classes) =>
  <TotalsTable id='base' columns={columns} totals={totals} classes={classes}>
    <tbody>
    {rows.map(row =>
      <Row key={row.name}
           dataFormatter={catFormatter}
           columns={columns}
           data={row.data}>
        <td className='row-header'>{row.name}</td>
      </Row>)}
    </tbody>
  </TotalsTable>;
