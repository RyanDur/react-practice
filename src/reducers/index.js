import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import TableReducer from '../components/Table/TableReducer';


export default combineReducers({
  todos,
  visibilityFilter,
  TableReducer
});