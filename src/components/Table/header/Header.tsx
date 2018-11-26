import * as React from 'react';
import {Component} from 'react';
import {TableRow} from '../elements/TableRow';
import {TableCorner} from '../elements/TableCorner';
import {TableHead} from '../elements/TableHead';
import {ColumnHeader} from '../elements/ColumnHeader';
import Menu from '../menu/connector';
import {DropDown} from '../menu/dropDown/DropDown';

export interface HeaderProps {
  columns: string[];
}

export class Header extends Component<HeaderProps> {
  columns = (columns: string[] = []) =>
    columns.map((name, key) =>
      <ColumnHeader key={key} column={name}>
        <DropDown>
          <Menu column={name}/>
        </DropDown>
        <div className="value">{name}</div>
      </ColumnHeader>);

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