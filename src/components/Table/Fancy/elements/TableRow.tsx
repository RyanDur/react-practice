import * as React from 'react';
import {ElementProps} from './ElementProps';
import './TableRow.css';

export const TableRow = (props: ElementProps) =>
  <div className={'table-row'}>{props.children}</div>;
