import * as React from 'react';
import {ElementProps} from "./ElementProps";
import './ColumnHeader.css';

interface ColumnHeaderProps {
  column: string
}

export const ColumnHeader = (props: ElementProps & ColumnHeaderProps): JSX.Element =>
  <div className={'column-header'} data-column={props.column}>{props.children}</div>;
