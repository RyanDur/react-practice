import {combineReducers} from 'redux';
import {Dropdown} from './Dropdown/Dropdown';
import {Emoji} from './Emoji';
import {Draggable, Fancy} from './Table';
import {fancy} from './Table/Fancy';
import {FancyState} from './Table/Fancy/types';

export interface ComponentState {
  fancy: FancyState;
}

const components = combineReducers<ComponentState>({fancy});

export {components, Fancy, Draggable, Dropdown, Emoji};
