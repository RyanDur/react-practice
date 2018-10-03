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
import {Checkbox} from './elements/Checkbox';
import './FancyTable.css';

class FancyTable extends Component {
  static propTypes = {
    updateData: PropTypes.func.isRequired,
    updateTotals: PropTypes.func.isRequired,
    toggleChecked: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    totals: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired
  };

  createData = ([key, value], i) =>
    <TableData column={key} key={i}>{value}</TableData>;

  handleChecked = (name, checked) => () =>
    this.props.toggleChecked({name, checked});

  columns = (columns = []) =>
    columns.map((name, key) =>
      <ColumnHeader key={key}>{name}</ColumnHeader>);

  rows = (rows = []) =>
    rows.map(({name, row, checked} = {}, idx) => {
      return <TableRow key={idx}>
        <TableData className='row-header'>
          <Checkbox index={idx} label={name} checked={checked}
                    change={this.handleChecked(name)}/>
        </TableData>
        {Object.entries(row).map(this.createData)}
      </TableRow>;
    });

  totals = (totals = {}) =>
    Object.entries(totals)
      .map(this.createData);

  componentDidMount() {
    this.props.updateData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.props.updateTotals(this.props.data);
    }
  }

  render() {
    const {data, totals, columns} = this.props;
    return <div className={'table-wrapper'}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCorner className={'column-header'}/>
            {this.columns(columns)}
          </TableRow>
        </TableHead>
        <TableBody>
          {this.rows(data)}
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