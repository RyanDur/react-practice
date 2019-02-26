import * as React from 'react';
import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {reducers as core} from '../../../../../core';
import {connectToData, socketAction} from '../../../../../core/action';
import {socketMiddleware} from '../../../../../core/middleware';
import {AppState} from '../../../../../types';
import {initialState} from '../../../__test__/initialState';
import {base} from '../../../Base';
import {SelectableAction, toggleSelect} from '../actions';
import {selectable} from '../index';
import {selectableRows} from '../selectors';
import {DataResponse} from '../../../../../core/types/DataResponse';

describe('selectable state', () => {
  let store: Store;
  let select: (selection: string) => SelectableAction;
  const clientConnector = jest.fn((fn: (data: DataResponse) => void) => fn(initialState));
  const selected = (state: AppState) =>
    selectableRows(state)
      .filter(row => row.selected)
      .map(selection => selection.name);

  beforeEach(() => {
    store = createStore(combineReducers({
      selectable,
      base,
      ...core
    }), applyMiddleware(socketMiddleware(clientConnector)));
    select = toggleSelect(store.dispatch);
    connectToData(store.dispatch);
    store.dispatch({type: socketAction.CONNECT});
  });

  it('should default the selections to empty', () => {
    expect(selected(store.getState())).toEqual([]);
  });

  it('should add the selection', () => {
    select('Alex');
    expect(selected(store.getState())).toEqual(['Alex']);
  });

  it('should remove the selection that is already selected', () => {
    select('Alex');
    select('Alex');
    expect(selected(store.getState())).toEqual([]);
  });
});
