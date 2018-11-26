import * as React from 'react';
import './TableFooter.css';
import {ElementProps} from './ElementProps';

export const TableFooter = (props: ElementProps) =>
  <div className={'table-footer'}>{props.children}</div>;