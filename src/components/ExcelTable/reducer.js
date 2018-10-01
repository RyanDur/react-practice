import {initialState} from './__test__/initialState';
import {getKeyValues, sumColumns} from './helpers';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'TABLE_TOTALS':
      return {
        ...state, totals:
          sumColumns(state.data
            .map(getKeyValues)
            .map(row => row.value))
      };
    case 'TABLE_DATA':
      return {...state, ...initialState};
    default:
      return state;
  }
};

export default reducer;