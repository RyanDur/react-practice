import {AppMiddleware} from '../../types';
import {base, BaseState} from './Base';
import {data, middleware as dataMiddleware} from './data';
import {DataAction} from './data/action';
import {DataState} from './data/types';
import {expandable, ExpandableState} from './Expandible';
import {CollapsibleAction} from './Expandible/state/actions';
import {selectable, SelectableAction, SelectableState} from './Selectable/state';

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
