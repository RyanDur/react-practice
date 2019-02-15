import {DataAction} from './action';
import {normalize} from './helpers';
import {dataAction} from './types';
import {DataState} from './types';

const defaultState: DataState = {
  rows: {},
  columns: []
};

export const reducer = (
  state: DataState = defaultState,
  action: DataAction
): DataState => {
  switch (action.type) {
  case dataAction.DATA:
    return {
      columns: Object.keys(action.data[0]).splice(1),
      rows: normalize(state.rows, action.data)
    };
  default:
    return state;
  }
};
