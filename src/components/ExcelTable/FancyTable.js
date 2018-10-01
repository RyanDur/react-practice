import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TableHead} from './elements/TableHead';
import {TableRow} from './elements/TableRow';
import {ColumnHeader} from './elements/ColumnHeader';
import {TableBody} from './elements/TableBody';
import {TableFooter} from './elements/TableFooter';
import {Table} from './elements/Table';
import {TableCorner} from './elements/TableCorner';
import {TableData} from './elements/TableData';
import {getKeyValues, isEmpty} from './helpers';
import './FancyTable.css';

class FancyTable extends Component {

  static createColumn(name, key) {
    return <ColumnHeader key={key}>{name}</ColumnHeader>;
  }

  static columnHeaders(data = [{}]) {
    const value = getKeyValues(data[0]).value;
    return !isEmpty(value) && Object.keys(value).map(FancyTable.createColumn);
  }

  static createData([key, value], i) {
    return <TableData column={key} key={i}>{value}</TableData>;
  }

  static createRow(row = {}, idx) {
    const {key, value} = getKeyValues(row);
    return <TableRow key={idx}>
      <TableData>{key}</TableData>
      {Object.entries(value).map(FancyTable.createData)}
    </TableRow>;
  }

  static rows(data = []) {
    return data.map(FancyTable.createRow);
  }

  static totals(totals = {}) {
    return Object.entries(totals)
      .map(FancyTable.createData);
  }

  componentDidMount() {
    this.props.getData();
    this.props.getTotals();
  }

  render() {
    return <div className={'table-wrapper'}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCorner className={'column-header'}/>
            {FancyTable.columnHeaders(this.props.data)}
          </TableRow>
        </TableHead>
        <TableBody>
          {FancyTable.rows(this.props.data)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableData>Totals:</TableData>
            {FancyTable.totals(this.props.totals)}
          </TableRow>
        </TableFooter>
      </Table>
    </div>;
  }
}

FancyTable.propTypes = {
  getData: PropTypes.func,
  getTotals: PropTypes.func,
  data: PropTypes.array,
  totals: PropTypes.object
};

export default FancyTable;