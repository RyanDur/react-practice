import {combineReducers, Reducer} from 'redux';
import {Draggable} from './Draggable';
import {Fancy, fancy} from './Fancy';
import {FancyState} from './Fancy/types';

export interface TableState {
  fancy: FancyState;
}
const table: Reducer<TableState> = combineReducers<TableState>({fancy});

export {Fancy, table, Draggable};
