import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import table from '../components/ExcelTable/reducer';


export default combineReducers({
  todos,
  visibilityFilter,
  table
});