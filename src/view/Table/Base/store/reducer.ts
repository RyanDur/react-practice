import {AppAction} from '../../../../actions';
import {dataAction} from '../../../../core/types';

export interface BaseState {
  columns: string[];
  rows: string[];
}

const defaultState: BaseState = {
  columns: [],
  rows: []
};

export const reducer = (
  state: BaseState = defaultState,
  action: AppAction
): BaseState => {
  switch (action.type) {
  case dataAction.DATA:
    return {...state, columns: action.response.columns, rows: action.response.rows};
  default:
    return state;
  }
};
