import React from "react";
import './ColumnHeader.css';

export function ColumnHeader(props) {
  return (<div className={'column-header'}>{props.children}</div>)
}