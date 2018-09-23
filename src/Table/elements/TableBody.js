import React from "react";
import './TableBody.css';

export function TableBody(props) {
  return <div className={'table-body'}>{props.children}</div>;
}