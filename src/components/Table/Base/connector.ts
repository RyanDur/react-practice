import {connect} from 'react-redux';
import {AppState} from '../../../store';
import {sumColumns} from '../../helpers';
import {Base} from './Base';

export default connect(({base, core}: AppState) => ({
  columns: base.columns,
  rows: base.rows.map(name => ({name, data: core.data[name]})),
  totals: sumColumns(base.rows.map(row => core.data[row]), base.columns)
}))(Base);
