import * as React from 'react';
import {Classes} from '../../types/Classes';
import {CollapsibleRow, Row, Select, TotalsTable} from '../element';
import {catFormatter} from '../element/cats';
import {ExpandableDispatchProps, ExpandableStateProps} from './state/connector';

export type ExpandableProps = ExpandableStateProps & ExpandableDispatchProps;

export const Expandable = ({totals, rows, toggleOpen, columns, classes}: ExpandableProps & Classes) =>
  <TotalsTable id='collapsible' totals={totals} columns={columns} classes={classes}>
    <tbody>
    {rows.map((row) => {
      if (row.subRows) {
        return <CollapsibleRow key={row.name}
                               dataFormatter={catFormatter}
                               columns={columns}
                               data={row.data}
                               open={row.selected}
                               handleOpen={() => toggleOpen(row.name)}
                               subData={row.subRows}>
          <td><Select classes={['row-header']}
                      handleSelect={toggleOpen}
                      id={'expandable'}
                      value={row}/></td>
        </CollapsibleRow>;
      } else {
        return <Row key={row.name}
                    dataFormatter={catFormatter}
                    columns={columns}
                    data={row.data}>
          <td className='row-header'>{row.name}</td>
        </Row>;
      }
    })}
    </tbody>
  </TotalsTable>;
