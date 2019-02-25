import {base, BaseState} from './Table/Base';
import {selectable, SelectableAction, SelectableState} from './Table/Selectable';
import {collapsible, Collapsible, CollapsibleState} from './Table/Collapsible';

export type ComponentAction = SelectableAction;
export interface ViewState {
  base: BaseState;
  selectable: SelectableState;
  collapsible: CollapsibleState;
}
export const reducers = {
  base,
  selectable,
  collapsible
};

export {
  SelectableState, BaseState, CollapsibleState, Collapsible
};
