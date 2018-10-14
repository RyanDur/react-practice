import {createStore} from 'redux';
import {reducer as tableReducer} from '../reducer';
import {initialState} from './initialState';
import {tableAction} from '../actions';

describe('Table state', () => {
  const store = createStore(tableReducer);
  const state = () => store.getState();

  beforeEach(() => {
    store.dispatch({type: tableAction.TABLE_DATA});
  });

  describe('table data', () => {
    it('should have the rows', () => {
      expect(state().rows).toBe(initialState.rows);
    });
  });

  describe('table columns', () => {
    it('should total the columns', () => {
      store.dispatch({type: tableAction.TABLE_TOTALS, rows: initialState.rows});

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
      store.dispatch({type: tableAction.TOGGLE_CHECKED, row: {name: 'Harrison', data: {}, checked: true}});

      expect(state().rows.filter(row => !row.checked)[0].name).toBe('Harrison');
    });
  });
});