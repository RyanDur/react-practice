import {combineReducers, createStore} from 'redux';
import table from './components/ExcelTable/reducer';

export const store = createStore(combineReducers({
  table
}));