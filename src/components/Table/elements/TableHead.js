import React from "react";
import './TableHead.css';

export function TableHead(props) {
  return <div className={'table-head'}>{props.children}</div>;
}