import {AppMiddleware} from '../../types';
import {base, BaseState, Base} from './Base';
import {data, middleware as dataMiddleware} from './data';
import {DataAction} from './data/action';
import {DataState} from './data/types';
import {expandable, ExpandableState, Expandable} from './Expandible';
import {CollapsibleAction} from './Expandible/state/actions';
import {selectable, SelectableAction, SelectableState} from './Selectable/state';
import {Draggable} from './Draggable';
import {Selectable} from './Selectable';

export type TableAction = SelectableAction | CollapsibleAction | DataAction;
export interface TableState {
  base: BaseState;
  data: DataState;
  selectable: SelectableState;
  expandable: ExpandableState;
}

export const tableMiddleware: AppMiddleware[] = [
  dataMiddleware
];

export const tableReducers = {
  base,
  data,
  selectable,
  expandable
};

export {
  Base,
  Draggable,
  Expandable,
  Selectable
};
