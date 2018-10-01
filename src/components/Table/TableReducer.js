import {initialState} from './__test__/initialState';
import {getKeyValues, sumColumns} from './helpers';

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOTALS_DATA':
      return {
        ...state, totals:
          sumColumns(state.data
            .map(getKeyValues)
            .map(row => row.value))
      };
    default:
      return state;
  }
};

export default TodoReducer;