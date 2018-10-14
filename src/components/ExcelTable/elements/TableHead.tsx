import * as React from 'react';
import './TableHead.css';
import {ElementProps} from "./ElementProps";

export const TableHead = (props: ElementProps): JSX.Element =>
  <div className={'table-head'}>{props.children}</div>;