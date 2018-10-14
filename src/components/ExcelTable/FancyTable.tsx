import * as React from 'react';
import {Component} from 'react';
import {TableHead} from './elements/TableHead';
import {TableRow} from './elements/TableRow';
import {ColumnHeader} from './elements/ColumnHeader';
import {TableBody} from './elements/TableBody';
import {TableFooter} from './elements/TableFooter';
import {Table} from './elements/Table';
import {TableCorner} from './elements/TableCorner';
import {TableData} from './elements/TableData';
import {Checkbox} from './elements/Checkbox';
import './FancyTable.css';
import {TableProps} from "./connector";
import {Data, Row, TableState} from "./reducer";

class FancyTable extends Component<TableProps, TableState> {
  createData = ([key, value]: [string, number], i: number): JSX.Element =>
    <TableData column={key} key={i}>{value}</TableData>;

  handleChecked = (row: Row) => (): void =>
    this.props.toggleChecked(row);

  columns = (columns: string[] = []): JSX.Element[] =>
    columns.map((name, key) =>
      <ColumnHeader key={key}>{name}</ColumnHeader>);

  rows = (rows: Row[] = []): JSX.Element[] =>
    rows.map((row: Row, idx) =>
      <TableRow key={idx}>
        <TableData className='row-header'>
          <Checkbox index={idx} label={row.name} checked={row.checked}
                    change={this.handleChecked(row)}/>
        </TableData>
        {Object.entries(row.data).map(this.createData)}
      </TableRow>);

  totals = (totals: Data = {}): JSX.Element[] =>
    Object.entries(totals)
      .map(this.createData);

  componentDidMount() {
    this.props.updateRows();
  }

  componentDidUpdate(prevProps: TableProps) {
    if (this.props.rows !== prevProps.rows) {
      this.props.updateTotals(this.props.rows);
    }
  }

  render() {
    const {rows, totals, columns} = this.props;
    return <div className={'table-wrapper'}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCorner className={'column-header'}/>
            {this.columns(columns)}
          </TableRow>
        </TableHead>
        <TableBody>
          {this.rows(rows)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableData>Totals:</TableData>
            {this.totals(totals)}
          </TableRow>
        </TableFooter>
      </Table>
    </div>;
  }
}

export default FancyTable;