import * as React from 'react';
import {Data} from '../../../../core/types';

interface TotalProps {
  columns: string[];
  totals: Data<number>;
}

export const Totals = ({columns, totals}: TotalProps) =>
  <tfoot>
  <tr>
    <td>Totals:</td>
    {columns.map(column => <td
      key={`${column}-footer`}
      data-group={column}
      className={'total'}>{totals[column]}</td>)}
  </tr>
  </tfoot>;
