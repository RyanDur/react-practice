import {connect} from 'react-redux';
import FancyTable from './FancyTable';
import {TABLE_DATA, TABLE_TOTALS, TOGGLE_CHECKED} from './actions';

export default connect(
  ({table}) => ({
    data: table.data || [],
    totals: table.totals || {},
    columns: table.columns || []
  }),
  dispatch => ({
    updateData: () => dispatch({type: TABLE_DATA}),
    updateTotals: (rows) => dispatch({type: TABLE_TOTALS, rows}),
    toggleChecked: (row) => dispatch({type: TOGGLE_CHECKED, row})
  })
)(FancyTable);