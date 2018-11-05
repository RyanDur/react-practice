import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {reducer as table} from '../reducer';
import {initialState, initialTableState} from './initialState';
import {tableAction} from '../actions';
import {createMySocketMiddleware} from "../../../core/client";
import {AppState} from "../../../store";
import {socketAction} from "../../../core/action";
import {Data, Row} from "../TableState";

jest.mock('../../../core/clientConnector', () => ({
  clientConnector: jest.fn((url: string, fn: (data: Data) => void) => fn(initialState))
}));

describe('Table state', () => {
  let store: Store<AppState>;

  const state = () => store.getState();

  beforeEach(() => {
    store = createStore(combineReducers<AppState>({
      table
    }), applyMiddleware(createMySocketMiddleware('ws://my-butt:some-port')));

    store.dispatch({type: tableAction.SET_DEFAULT_CHECKED, checked: true});
    store.dispatch({type: socketAction.CONNECT});
  });

  describe('table data', () => {
    it('should have the rows', () => {
      expect(state().table.rows).toEqual(initialTableState.rows);
    });
  });

  describe('table columns', () => {
    describe('initial state', () => {
      it('should total the columns', () => {
        expect(state().table.totals).toEqual({
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
        });
      });
    });
  });

  describe('checked rows', () => {
    it('should toggle checked of a row', () => {
      store.dispatch({type: tableAction.TOGGLE_CHECKED, row: {name: 'Harrison', data: {}, checked: true}});

      expect(state().table.rows.filter((row: Row) => !row.checked)[0].name).toBe('Harrison');
    });
  });

  describe('update totals', () => {
    it('should ', () => {
      expect(state().table.totals).toEqual({
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
      });
      store.dispatch({type: tableAction.TOGGLE_CHECKED, row: {name: 'Harrison', data: {}, checked: true}});
      store.dispatch({type: tableAction.UPDATE_TOTALS});
      expect(state().table.totals).toEqual({
        foo: 9,
        bar: 18,
        baz: 27,
        bob: 36,
        far: 45,
        faz: 54,
        fop: 63,
        coo: 72,
        cor: 81,
        cop: 90
      });
    });
  });
});