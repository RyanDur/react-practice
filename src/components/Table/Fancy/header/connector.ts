import {connect} from 'react-redux';
import {Header, HeaderProps} from './Header';
import {AppState} from '../../../../store';

export default connect<HeaderProps>(({components}: AppState) => ({
  columns: components.table.fancy.columns.active
}))(Header);
