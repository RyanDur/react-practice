import * as React from 'react';
import './TableCorner.css';
import {ElementProps} from './ElementProps';

interface TableCornerProps extends ElementProps {
  classes?: string[];
}

export const TableCorner = (props: TableCornerProps) =>
  <div className={['table-corner', ...props.classes].join(' ')}>{props.children}</div>;