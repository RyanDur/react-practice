import {DataAction} from './action';
import {normalize} from './helpers';
import {dataAction, CoreState} from './types';

const defaultState: CoreState = {
  data: {},
  rows: [],
  columns: []
};

export const reducer = (
  state: CoreState = defaultState,
  action: DataAction
): CoreState => {
  switch (action.type) {
  case dataAction.DATA:
    return {
      ...state,
      data: normalize(state.data, action.response.data),
      rows: action.response.rows,
      columns: action.response.columns
    };
  default:
    return state;
  }
};
