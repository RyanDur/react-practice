import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {initialState} from '../../../__test__/initialState';
import {base} from '../../../Base';
import {data} from '../../../data';
import {connectToData, socketAction} from '../../../data/action';
import {socketMiddleware} from '../../../data/middleware';
import {DataResponse} from '../../../data/types';
import {CollapsibleAction, toggleOpen} from '../actions';
import {reducer as expandable} from '../reducer';
import {expandableRows} from '../selectors';
import {jordan_closed, jordan_open} from './expected';

describe('expandable table state', () => {
  let store: Store;
  let open: (selection: string) => CollapsibleAction;
  const clientConnector = jest.fn((fn: (data: DataResponse) => void) => fn(initialState));

  beforeEach(() => {
    store = createStore(combineReducers({
      expandable,
      base,
      core: data
    }), applyMiddleware(socketMiddleware(clientConnector)));
    open = toggleOpen(store.dispatch);
    connectToData(store.dispatch);
    store.dispatch({type: socketAction.CONNECT});
  });

  describe('creating the row data', () => {
    it('should create a row for each row name', () => {
      const rows = expandableRows(store.getState());
      expect(rows).toEqual(jordan_closed);
    });
  });

  it('should mark a row open', () => {
    open('Jordan');
    const rows = expandableRows(store.getState());
    expect(rows).toEqual(jordan_open);
  });
});
