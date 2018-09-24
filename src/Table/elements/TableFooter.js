import React from "react";
import './TableFooter.css';

export function TableFooter(props) {
  return <div className={'table-footer'}>{props.children}</div>;
}