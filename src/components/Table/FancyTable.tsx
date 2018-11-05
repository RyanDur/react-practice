import * as React from 'react';
import {Component} from 'react';
import {ColumnHeader} from './elements/ColumnHeader';
import {Table} from './elements/Table';
import './FancyTable.css';
import {TableProps} from "./connector";
import {TableState} from "./TableState";
import Totals from "./totals/connector";
import Rows from './rows/connector';
import Header from "./header/connector";

class FancyTable extends Component<TableProps, TableState> {
  columns = (columns: string[] = []): JSX.Element[] =>
    columns.map((name, key) =>
      <ColumnHeader key={key}>{name}</ColumnHeader>);

  componentDidMount() {
    this.props.setDefaultCheck(true);
    this.props.connect();
  }

  render() {
    return <div className={'table-wrapper'}>
      <Table>
        <Header/>
        <Rows/>
        <Totals/>
      </Table>
    </div>;
  }
}

export default FancyTable;