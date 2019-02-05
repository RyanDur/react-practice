import {combineReducers} from 'redux';
import {Dropdown} from './Dropdown/Dropdown';
import {Emoji} from './Emoji';
import {Draggable, Fancy, table, TableState} from './Table';

export interface ComponentState {
  table: TableState;
}

const components = combineReducers<ComponentState>({table})

export {components, Fancy, Draggable, Dropdown, Emoji};
