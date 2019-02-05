import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {core as data} from '../../../core';
import {socketAction} from '../../../core/action';
import {createMySocketMiddleware} from '../../../core/client';
import {Data, Row} from '../../../core/types';
import {AppState} from '../../../store';
import {components} from '../../index';
import {CheckedRow} from '../Fancy/types';
import {tableAction} from '../actions';
import {Direction} from '../Menu/types';
import {initialState, initialTableState} from './initialState';

jest.mock('../../../core/clientConnector', () => ({
  clientConnector: jest.fn((url: string, fn: (data: Data) => void) => fn(initialState))
}));

describe('Table state', () => {
  let store: Store<AppState>;

  const state = () => store.getState();

  beforeEach(() => {
    store = createStore(combineReducers<AppState>({
      components,
      data
    }), applyMiddleware(createMySocketMiddleware('ws://my-butt:some-port')));

    store.dispatch({type: socketAction.CONNECT});
  });

  describe('table data', () => {
    it('should have the rows', () => {
      expect(state().components.table.fancy.rows).toEqual(initialTableState.rows);
    });
  });

  describe('table columns', () => {
    describe('adding', () => {
      it('should be able to add the right of a column', () => {
        expect(state().components.table.fancy.columns).toEqual({
          active: [
            'bar',
            'baz',
            'bob',
            'coo',
            'cop',
            'cor',
            'far',
            'faz',
            'foo',
            'fop'
          ],
          inactive: ['another', 'yet_another']
        });
        store.dispatch({
          type: tableAction.ADD_COLUMNS,
          side: Direction.Right,
          column: 'bar',
          columns: ['yet_another']
        });
        expect(state().components.table.fancy.columns).toEqual({
          active: [
            'bar',
            'yet_another',
            'baz',
            'bob',
            'coo',
            'cop',
            'cor',
            'far',
            'faz',
            'foo',
            'fop'
          ],
          inactive: ['another']
        });
      });

      it('should be able to add the left of a column', () => {
        expect(state().components.table.fancy.columns).toEqual({
          active: [
            'bar',
            'baz',
            'bob',
            'coo',
            'cop',
            'cor',
            'far',
            'faz',
            'foo',
            'fop'
          ],
          inactive: ['another', 'yet_another']
        });
        store.dispatch({
          type: tableAction.ADD_COLUMNS,
          side: Direction.Left,
          column: 'bar',
          columns: ['another']
        });
        expect(state().components.table.fancy.columns).toEqual({
          active: [
            'another',
            'bar',
            'baz',
            'bob',
            'coo',
            'cop',
            'cor',
            'far',
            'faz',
            'foo',
            'fop'
          ],
          inactive: ['yet_another']
        });
      });
    });

    describe('removing', () => {
      it('should be able to remove a column', () => {
        expect(state().components.table.fancy.columns).toEqual({
          active: [
            'bar',
            'baz',
            'bob',
            'coo',
            'cop',
            'cor',
            'far',
            'faz',
            'foo',
            'fop'
          ],
          inactive: ['another', 'yet_another']
        });
        store.dispatch({
          type: tableAction.REMOVE_COLUMNS,
          columns: ['bar', 'coo', 'foo']
        });
        expect(state().components.table.fancy.columns).toEqual({
          active: [
            'baz',
            'bob',
            'cop',
            'cor',
            'far',
            'faz',
            'fop'
          ],
          inactive: ['another', 'yet_another', 'bar', 'coo', 'foo']
        });
      });
    });
  });

  describe('checked rows', () => {
    beforeEach(() => {
      state().components.table.fancy.rows.forEach(
        row => store.dispatch({type: tableAction.TOGGLE_CHECKED, row}));
    });

    it('should toggle checked of a row', () => {
      store.dispatch({type: tableAction.TOGGLE_CHECKED, row: {name: 'Harrison', data: {}, checked: true}});

      expect(state().components.table.fancy.rows.filter((row: CheckedRow) => !row.checked)[0].name).toBe('Harrison');
    });

    it('should set undefined to true', () => {
      store.dispatch({type: tableAction.TOGGLE_CHECKED, row: {name: 'Harrison', data: {}}});
      expect(state().components.table.fancy.rows.filter((row: Row) => row.name === 'Harrison')[0].checked).toBeTruthy();
    });
  });
});
