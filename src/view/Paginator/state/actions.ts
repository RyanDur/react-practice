import {Action, Dispatch} from 'redux';

export enum paginationAction {
  CHANGE_PAGE = 'CHANGE_WINDOW'
}

export interface PaginationAction extends Action<paginationAction.CHANGE_PAGE> {
  page: number;
}

export const changePage = (dispatch: Dispatch<PaginationAction>) => (page: number) => dispatch({
  type: paginationAction.CHANGE_PAGE,
  page
});
