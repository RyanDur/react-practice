import {Component} from "react";
import {TableRow} from "../elements/TableRow";
import {TableCorner} from "../elements/TableCorner";
import {TableHead} from "../elements/TableHead";
import * as React from "react";
import {ColumnHeader} from "../elements/ColumnHeader";

export interface HeaderProps {
  columns: string[]
}

export class Header extends Component<HeaderProps> {
  columns = (columns: string[] = []): JSX.Element[] =>
    columns.map((name, key) =>
      <ColumnHeader key={key}>{name}</ColumnHeader>);

  render() {
    const {columns} = this.props;
    return <TableHead>
      <TableRow>
        <TableCorner>Name</TableCorner>
        {this.columns(columns)}
      </TableRow>
    </TableHead>;
  }
}