import * as React from 'react';
import {Row} from '../elements/Row/Row';
import {SelectableHeader} from '../elements/SelectableHeader/SelectableHeader';
import {TotalsTable} from '../elements/TotalsTable/TotalsTable';
import {SelectableProps} from './store/connector';

export interface ManuallyDefinedProps {
  defaultSelected: boolean;
}

export const Selectable = (props: SelectableProps & ManuallyDefinedProps) =>
  <TotalsTable id='selectable' {...props}>
    <tbody>
    {props.rows.map(row =>
      <Row key={row.name} columns={props.columns} data={row.data}>
        <SelectableHeader
          value={row}
          handleSelect={props.toggleSelect}
          defaultSelected={props.defaultSelected}/>
      </Row>)}
    </tbody>
  </TotalsTable>;
