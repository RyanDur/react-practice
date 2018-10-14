import * as React from 'react';
import {ElementProps} from "./ElementProps";
import './Table.css';

export const Table = (props: ElementProps): JSX.Element =>
  <div className={'reducer'}>{props.children}</div>;