import * as React from 'react';
import {ElementProps} from "./ElementProps";
import './TableRow.css';

export const TableRow = (props: ElementProps): JSX.Element =>
  <div className={'table-row'}>{props.children}</div>;