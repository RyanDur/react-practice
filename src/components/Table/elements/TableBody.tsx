import * as React from 'react';
import {ElementProps} from "./ElementProps";
import './TableBody.css';

export const TableBody = (props: ElementProps): JSX.Element =>
  <div className={'table-body'}>{props.children}</div>