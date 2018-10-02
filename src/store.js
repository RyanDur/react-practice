import {combineReducers, createStore} from 'redux';
import {reducer as table} from './components/ExcelTable/reducer';

export const store = createStore(combineReducers({
  table
}));