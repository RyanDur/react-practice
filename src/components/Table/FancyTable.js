import React, {Component} from 'react';
import {TableHead} from './elements/TableHead';
import {TableRow} from './elements/TableRow';
import {ColumnHeader} from './elements/ColumnHeader';
import {TableBody} from './elements/TableBody';
import {TableFooter} from './elements/TableFooter';
import {Table} from './elements/Table';
import {TableCorner} from './elements/TableCorner';
import './FancyTable.css';

class FancyTable extends Component {

  static column(name, key) {
    return <ColumnHeader key={key}>{name}</ColumnHeader>;
  }

  columnHeaders({data = []}) {
    return data.map(row => Object.keys(row).map(FancyTable.column));
  }

  render() {
    return <div className={'table-wrapper'}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCorner/>
            {this.columnHeaders(this.props)}
          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
        <TableFooter>
        </TableFooter>
      </Table>
    </div>;
  }
}

export default FancyTable;