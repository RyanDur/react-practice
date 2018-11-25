import * as React from 'react';
import {Component} from 'react';
import {Table} from './elements/Table';
import './FancyTable.css';
import {TableProps} from './connector';
import {TableState} from './types';
import Totals from './totals/connector';
import Rows from './rows/connector';
import Header from "./header/connector";

class FancyTable extends Component<TableProps, TableState> {
  componentDidMount() {
    this.props.connect();
  }

  render() {
    return <div className="table-wrapper">
        <Table>
          <Header/>
          <Rows defaultCheck={true}/>
          <Totals/>
        </Table>
      </div>;
  }
}

export default FancyTable;