import * as React from 'react';
import {Component, ReactNode} from 'react';
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

class FancyTable extends Component<TableProps ,TableState> {
  createData = ([key, value]: [string, number], i: number): ReactNode =>
    <TableData column={key} key={i}>{value}</TableData>;

  handleChecked = (row: Row) => () =>
    this.props.toggleChecked(row);

  columns = (columns: string[] = []) =>
    columns.map((name, key) =>
      <ColumnHeader key={key}>{name}</ColumnHeader>);

  rows = (rows: Row[] = []) =>
    rows.map(({name, data, checked}: Row, idx) => {
      return <TableRow key={idx}>
        <TableData className='row-header'>
          <Checkbox index={idx} label={name} checked={checked}
                    change={this.handleChecked({name, data, checked})}/>
        </TableData>
        {Object.entries(data).map(this.createData)}
      </TableRow>;
    });

  totals = (totals: Data = {}) =>
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