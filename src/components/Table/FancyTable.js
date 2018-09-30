import React, {Component} from 'react';
import {TableHead} from './elements/TableHead';
import {TableRow} from './elements/TableRow';
import {ColumnHeader} from './elements/ColumnHeader';
import {TableBody} from './elements/TableBody';
import {TableFooter} from './elements/TableFooter';
import {Table} from './elements/Table';
import {TableCorner} from './elements/TableCorner';
import {TableData} from './elements/TableData';
import './FancyTable.css';

const sum = (acc, val) => acc + val;
const transpose = (rows) =>
  (name) => [name, rows.map((row) => row[name])];
const undoEntry = fn =>
  (obj, [key, val]) => ({...obj, [key]: val.reduce(fn, 0)});

const sumRows = (rows) => Object.keys(rows[0])
  .map(transpose(rows))
  .reduce(undoEntry(sum), {});

class FancyTable extends Component {

  static createColumn(name, key) {
    return <ColumnHeader key={key}>{name}</ColumnHeader>;
  }

  static columnHeaders({data = []}) {
    return data.map(row => Object.keys(row).map(FancyTable.createColumn));
  }

  static createData([key, value], i) {
    return <TableData column={key} key={i}>{value}</TableData>;
  }

  static createRow(row = {}, key) {
    return <TableRow key={key}>
      {Object.entries(row).map(FancyTable.createData)}
    </TableRow>;
  }

  static rows({data = []}) {
    return data.map(FancyTable.createRow);
  }

  static totals({data = [{}]}) {
    return Object.entries(sumRows(data))
      .map(FancyTable.createData);
  }

  render() {
    return <div className={'table-wrapper'}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCorner/>
            {FancyTable.columnHeaders(this.props)}
          </TableRow>
        </TableHead>
        <TableBody>
          {FancyTable.rows(this.props)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableData>Totals:</TableData>
            {FancyTable.totals(this.props)}
          </TableRow>
        </TableFooter>
      </Table>
    </div>;
  }
}

export default FancyTable;