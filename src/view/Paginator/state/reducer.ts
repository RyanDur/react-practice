import {paginationAction, PaginationAction} from './actions';

export interface CarState {
  page: PageState;
}

interface PageState {
  currentPage: number;
}

const defaultState: PageState = {
  currentPage: 0
};

export default (
  state: PageState = defaultState,
  action: PaginationAction
): PageState => {
  switch (action.type) {
  case paginationAction.CHANGE_PAGE:
    return {currentPage: action.page};
  default:
    return state;
  }
};
