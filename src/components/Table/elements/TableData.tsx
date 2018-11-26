import * as React from 'react';
import './TableData.css';
import {ElementProps} from "./ElementProps";

interface TableDataProps extends ElementProps {
  column?: string
  className?: string
  id?: string
}

export const TableData = (props: TableDataProps) =>
  <div
    data-column={props.column}
    className={'table-data ' + props.className}
    id={props.id}>
    {props.children}
  </div>;