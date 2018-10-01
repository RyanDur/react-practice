import {connect} from 'react-redux';
import FancyTable from './FancyTable';

const mapStateToProps = state => ({
  data: state.data,
  totals: state.totals
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch({type: 'TABLE_DATA'}),
  getTotals: () => dispatch({type: 'TOTALS_DATA'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FancyTable);