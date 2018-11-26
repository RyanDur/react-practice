import * as React from 'react';
import {ElementProps} from './ElementProps';
import './TableBody.css';

export const TableBody = (props: ElementProps) =>
  <div className={'table-body'}>{props.children}</div>