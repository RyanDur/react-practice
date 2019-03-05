import {AppAction} from '../../../../actions';
import {dataAction} from '../../data/action';

export interface BaseState {
  columns: string[];
  rowNames: string[];
}

const defaultState: BaseState = {
  columns: [],
  rowNames: []
};

export const reducer = (
  state: BaseState = defaultState,
  action: AppAction
): BaseState => {
  switch (action.type) {
  case dataAction.DATA:
    return {...state, columns: action.columnNames, rowNames: action.rowNames};
  default:
    return state;
  }
};
