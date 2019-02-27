import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {reducers as core} from '../../../../../core';
import {connectToData, socketAction} from '../../../../../core/action';
import {socketMiddleware} from '../../../../../core/middleware';
import {DataResponse} from '../../../../../core/types/DataResponse';
import {initialState} from '../../../__test__/initialState';
import {base} from '../../../Base';
import {CollapsibleAction, toggleOpen} from '../actions';
import {reducer as collapsible} from '../reducer';
import {collapsibleRows} from '../selectors';
import {jordan_closed, jordan_open} from './expected';

describe('collapsible table state', () => {
  let store: Store;
  let open: (selection: string) => CollapsibleAction;
  const clientConnector = jest.fn((fn: (data: DataResponse) => void) => fn(initialState));

  beforeEach(() => {
    store = createStore(combineReducers({
      collapsible,
      base,
      ...core
    }), applyMiddleware(socketMiddleware(clientConnector)));
    open = toggleOpen(store.dispatch);
    connectToData(store.dispatch);
    store.dispatch({type: socketAction.CONNECT});
  });

  describe('creating the row data', () => {
    it('should create a row for each row name', () => {
      const rows = collapsibleRows(store.getState());
      expect(rows).toEqual(jordan_closed);
    });
  });

  it('should mark a row open', () => {
    open('Jordan');
    const rows = collapsibleRows(store.getState());
    expect(rows).toEqual(jordan_open);
  });
});
