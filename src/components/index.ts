import {combineReducers} from 'redux';
import {Dropdown} from './Dropdown/Dropdown';
import {Emoji} from './Emoji';
import {Draggable, Fancy, FancyAction, Base} from './Table';
import {BaseState} from './Table/Base/reducer';
import {fancy} from './Table/Fancy';
import {FancyState} from './Table/Fancy/types';
import {base} from './Table/Base';

export interface ComponentState {
  fancy: FancyState;
  base: BaseState;
}

const components = combineReducers<ComponentState>({fancy, base});

export {components, Fancy, FancyAction, Draggable, Dropdown, Emoji, Base};
