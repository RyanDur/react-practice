import {connect} from 'react-redux';
import FancyTable from './FancyTable';

export default connect(
  ({table}) => ({
    data: table.data,
    totals: table.totals
  }),
  dispatch => ({
    getData: () => dispatch({type: 'TABLE_DATA'}),
    getTotals: () => dispatch({type: 'TABLE_TOTALS'})
  })
)(FancyTable);