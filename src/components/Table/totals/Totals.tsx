import * as React from "react";
import {Component} from "react";
import {TableRow} from "../elements/TableRow";
import {TableFooter} from "../elements/TableFooter";
import {TableData} from "../elements/TableData";
import {Data} from "../TableState";
import {TotalsProps} from "./connector";

export class Totals extends Component<TotalsProps> {
  totals = (totals: Data = {}, columns: string[]): JSX.Element[] =>
    columns.map((column: string, index: number) =>
      <TableData
        className={'total'}
        id={`table-data-footer-${index}`}
        column={column}
        key={index}>{totals[column] || '—'}</TableData>);

  componentDidUpdate(prevProps: TotalsProps) {
    const previouslyChecked = prevProps.rows.map(row => row.checked);
    const currentlyChecked = this.props.rows.map(row => row.checked);
    if (previouslyChecked.toString() !== currentlyChecked.toString()) {
      this.props.updateTotals()
    }
  }

  render() {
    const {totals, columns} = this.props;
    return <TableFooter>
      <TableRow>
        <TableData>Totals:</TableData>
        {this.totals(totals, columns)}
      </TableRow>
    </TableFooter>;
  }
}