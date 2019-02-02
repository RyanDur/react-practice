import * as React from 'react';
import './TableHead.css';
import {ElementProps} from './ElementProps';

export const TableHead = (props: ElementProps) =>
  <div className={'table-head'}>{props.children}</div>;
