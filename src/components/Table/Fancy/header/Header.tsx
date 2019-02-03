import * as React from 'react';
import {Component} from 'react';
import {TableRow} from '../elements/TableRow';
import {TableCorner} from '../elements/TableCorner';
import {TableHead} from '../elements/TableHead';
import {ColumnHeader} from '../elements/ColumnHeader';
import {Menu} from '../../Menu';
import {DropDown} from '../../Menu/dropDown/DropDown';

export interface HeaderProps {
  columns: string[];
}

export class Header extends Component<HeaderProps> {
  columns = (columns: string[] = []) =>
    columns.map((name, key) =>
      <ColumnHeader classes={['stick-top gray']} key={key} column={name}>
        <div className='center split gray'>
          <DropDown>
            <Menu column={name}/>
          </DropDown>
          <div className='value'>{name}</div>
        </div>
      </ColumnHeader>);

  render() {
    const {columns} = this.props;
    return <TableHead>
      <TableRow>
        <TableCorner classes={['stick-top stick-left corner gray']}>Name</TableCorner>
        {this.columns(columns)}
      </TableRow>
    </TableHead>;
  }
}
