import * as React from 'react';
import {ElementProps} from "./ElementProps";
import './ColumnHeader.css';

export const ColumnHeader = (props: ElementProps): JSX.Element =>
  <div className={'column-header'}>{props.children}</div>;
