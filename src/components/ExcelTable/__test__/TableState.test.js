import {createStore} from 'redux';
import {reducer as tableReducer} from '../reducer';
import {initialState} from './initialState';
import {TABLE_DATA, TABLE_TOTALS, TOGGLE_CHECKED} from '../actions';

describe('Table state', () => {
  const store = createStore(tableReducer);
  const state = () => store.getState();

  beforeEach(() => {
    store.dispatch({type: TABLE_DATA});
  });

  describe('table data', () => {
    it('should have the data', () => {
      expect(state().data).toBe(initialState.data);
    });
  });

  describe('table columns', () => {
    it('should total the columns', () => {
      store.dispatch({type: TABLE_TOTALS, rows: initialState.data});

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

      expect(state().totals).toEqual(column.totals);
    });
  });

  describe('checked rows', () => {
    it('should toggle checked of a row', () => {
      store.dispatch({type: TOGGLE_CHECKED, row: {name: 'Harrison', checked: true}});

      expect(state().data.filter(row => !row.checked)[0]?.name).toBe('Harrison');
    });
  });
});