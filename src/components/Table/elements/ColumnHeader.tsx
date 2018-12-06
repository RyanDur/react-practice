import * as React from 'react';
import {ElementProps} from './ElementProps';
import './ColumnHeader.css';

interface ColumnHeaderProps {
  column: string;
  classes?: string[];
}

export const ColumnHeader = (props: ElementProps & ColumnHeaderProps)  =>
  <div className={['column-header', ...props.classes].join(' ')} data-column={props.column}>{props.children}</div>;
