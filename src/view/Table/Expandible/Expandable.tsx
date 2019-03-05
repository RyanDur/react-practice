import * as React from 'react';
import {CollapsibleRow, Row, SelectableHeader, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {ExpandableDispatchProps, ExpandableStateProps} from './state/connector';

export type ExpandableProps = ExpandableStateProps & ExpandableDispatchProps;

export const Expandable = ({totals, rows, toggleOpen, columns}: ExpandableProps) =>
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
                                id={'expandable'}
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
