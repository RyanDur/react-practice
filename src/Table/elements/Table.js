import React from "react";
import './Table.css'

export function Table(props) {
  return <div className={'table'}>{props.children}</div>;
}