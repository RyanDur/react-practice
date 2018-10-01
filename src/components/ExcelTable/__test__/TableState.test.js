import {createStore} from 'redux';
import tableReducer from '../reducer';
import {initialState} from './initialState';

describe('ExcelTable state', () => {
  const store = createStore(tableReducer);

  it('should have the data', () => {
    store.dispatch({type: 'TABLE_DATA'});
    const state = store.getState();

    expect(state.data).toBe(initialState.data);
  });

  it('should total the columns', () => {
    store.dispatch({type: 'TABLE_TOTALS'});
    const state = store.getState();

    const column = {
      totals: {
        foo: 10,
        bar: 20,
        baz: 30,
        bob: 40,
        far: 50,
        faz: 60,
        fop: 70,
        coo: 80,
        cor: 90,
        cop: 100
      }
    };

    expect(state.totals).toEqual(column.totals);
  });
});