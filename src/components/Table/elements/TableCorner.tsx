import * as React from 'react';
import './TableCorner.css';
import {ElementProps} from './ElementProps';

export const TableCorner = (props: ElementProps) =>
  <div className={'table-corner'}>{props.children}</div>;