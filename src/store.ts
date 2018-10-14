import {combineReducers, createStore} from 'redux';
import {reducer as table} from './components/ExcelTable/reducer';

const reducers = combineReducers({
  table
});
export const store = createStore(reducers);