import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {socketAction} from '../action';
import {data} from '../index';
import {socketMiddleware} from '../middleware';
import {defaultState} from '../reducer';
import {DataResponse, Table} from '../types';

describe('normalizing the data', () => {
  const clientConnector = jest.fn((fn: (data: DataResponse) => void) => fn({
    data: [
      {name: 'foo', fip: 3, fop: 6},
      {name: 'far', fip: 6, fop: 7}
    ],
    columnNames: ['fip', 'fop'],
    rowNames: ['foo', 'far']
  }));
  let store: Store;

  beforeEach(() => {
    store = createStore(combineReducers({
      core: data
    }), applyMiddleware(socketMiddleware(clientConnector)));
  });

  it('should have a default state', () => {
    expect(store.getState().core).toEqual(defaultState);
  });

  describe('on connect', () => {
    beforeEach(() => {
      store.dispatch({type: socketAction.CONNECT});
    });

    it('should take the data and turn it into a table', () => {
      const expected: Table = {
        foo: {data: {fip: 3, fop: 6}},
        far: {data: {fip: 6, fop: 7}}
      };
      expect(store.getState().core.table).toEqual(expected);
    });

    it('should have the columns', () => {
      expect(store.getState().core.columns).toEqual(['fip', 'fop']);
    });

    it('should have the rows', () => {
      expect(store.getState().core.rows).toEqual(['foo', 'far']);
    });
  });
});
