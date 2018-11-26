import * as React from 'react';
import {ElementProps} from './ElementProps';
import './Table.css';

export const Table = (props: ElementProps) =>
  <div className={'table'}>{props.children}</div>;