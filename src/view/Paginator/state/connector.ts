import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from '../../../types';
import {Paginator} from '../Paginator';
import {changePage, PaginationAction} from './actions';
import {currentPage} from './selectors';

export interface PageStateProps {
  currentPage: number;
}

export interface PageDispatchProps {
  changePage: (index: number) => void;
}

export default connect<PageStateProps, PageDispatchProps>(
  (state: AppState) => ({
    currentPage: currentPage(state)
  }),
  (dispatch: Dispatch<PaginationAction>) => ({
    changePage: changePage(dispatch)
  })
)(Paginator);
