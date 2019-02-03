import {DataAction} from './action';
import {normalize} from './helpers';
import {dataAction} from './types';
import {DataState} from './types';

const defaultState: DataState = {
  rows: [],
  columns: ['bar', 'baz', 'bob', 'coo', 'cop', 'cor', 'far', 'faz', 'foo', 'fop', 'another', 'yet_another']
};

export const reducer = (
  state: DataState = defaultState,
  action: DataAction
): DataState => {
  switch (action.type) {
  case dataAction.DATA:
    return {...state, rows: normalize(action.data, state.rows)};
  default:
    return state;
  }
};
