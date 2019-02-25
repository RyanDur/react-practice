import {DataAction} from './action';
import {normalize} from './helpers';
import {dataAction, DataState} from './types';

const defaultState: DataState = {
  data: {},
  rows: [],
  columns: []
};

export const reducer = (
  state: DataState = defaultState,
  action: DataAction
): DataState => {
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
