import React from "react";
import './TableRow.css';

export function TableRow(props) {
  return <div className={'table-row'}>{props.children}</div>;
}