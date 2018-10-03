import {initialState} from './__test__/initialState';
import {sumColumns, updateChecked} from './helpers';
import {TABLE_DATA, TABLE_TOTALS, TOGGLE_CHECKED} from './actions';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case TABLE_TOTALS:
      return {...state, totals: sumColumns(action.rows)};
    case TABLE_DATA:
      return {...state, ...initialState};
    case TOGGLE_CHECKED:
      return {...state, data: updateChecked(action.row, state.data)};
    default:
      return state;
  }
};