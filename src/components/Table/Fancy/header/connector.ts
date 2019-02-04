import {connect} from 'react-redux';
import {Header, HeaderProps} from './Header';
import {AppState} from '../../../../store';

export default connect<HeaderProps>(({table}: AppState) => ({
  columns: table.fancy.columns.active
}))(Header);
