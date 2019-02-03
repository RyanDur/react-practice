import * as React from 'react';
import {Component} from 'react';
import {Table} from './elements/Table';
import './FancyTable.css';
import Header from './header/connector';
import Rows from './rows/connector';
import Totals from './totals/connector';

class FancyTable extends Component {
  render() {
    return <div className='table-wrapper'>
      <Table>
        <Header/>
        <Rows defaultCheck={true}/>
        <Totals/>
      </Table>
    </div>;
  }
}

export default FancyTable;
