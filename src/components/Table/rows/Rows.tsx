import * as React from "react";
import {Component} from "react";
import {Row} from "../TableState";
import {TableBody} from "../elements/TableBody";
import {TableRow} from "../elements/TableRow";
import {TableData} from "../elements/TableData";
import {Checkbox} from "../elements/Checkbox";
import {RowsProps} from "./connector";

export interface Default {
  defaultCheck?: boolean;
}

export class Rows extends Component<RowsProps & Default> {

  state = {defaultCheck: false};

  constructor(props: RowsProps & Default) {
    super(props);
    this.state = {defaultCheck: props.defaultChecked};
  }

  createData = (row: Row) => (column: string, i: number): JSX.Element =>
    <TableData
      id={`table-data-body-${i}`}
      className={'row-cell'}
      column={column}
      key={i}>{row.data[column] || '—'}</TableData>;

  handleChecked = (row: Row) => (): void =>
    this.props.toggleChecked(row);

  rows = (rows: Row[] = [], columns: string[] = []): JSX.Element[] =>
    rows.map((row: Row, index) =>
      <TableRow key={index}>
        <TableData className='row-header'>
          <Checkbox index={index}
                    label={row.name}
                    checked={row.checked || this.state.defaultCheck}
                    change={this.handleChecked(row)}/>
        </TableData>
        {columns.map(this.createData(row))}
      </TableRow>);

  render() {
    const {rows, columns} = this.props;
    return <TableBody>
      {this.rows(rows, columns)}
    </TableBody>
  }
}