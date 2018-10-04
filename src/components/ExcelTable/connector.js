import {connect} from 'react-redux';
import FancyTable from './FancyTable';
import {TABLE_DATA, TABLE_TOTALS, TOGGLE_CHECKED} from './actions';

export default connect(
  ({table}) => ({
    rows: table.rows || [],
    totals: table.totals || {},
    columns: table.columns || []
  }),
  dispatch => ({
    updateRows: () => dispatch({type: TABLE_DATA}),
    updateTotals: (rows) => dispatch({type: TABLE_TOTALS, rows}),
    toggleChecked: (row) => dispatch({type: TOGGLE_CHECKED, row})
  })
)(FancyTable);