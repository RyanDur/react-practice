import {connect} from 'react-redux';
import {AppState} from '../../../store';
import {sumColumns} from '../../helpers';
import {Base} from './Base';

export default connect(({components, core}: AppState) => ({
  columns: components.base.columns,
  rows: components.base.rows.map(name => ({name, data: core.data[name]})),
  totals: sumColumns(components.base.rows.map(row => core.data[row]), components.base.columns)
}))(Base);
