import {initialState} from './__test__/initialState';
import {getRows, sumColumns} from './helpers';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'TABLE_TOTALS':
      return {...state, totals: sumColumns(getRows(state))};
    case 'TABLE_DATA':
      return {...state, ...initialState};
    default:
      return state;
  }
};