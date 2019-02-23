import {base, BaseState} from './Table/Base';
import {selectable, SelectableAction, SelectableState} from './Table/Selectable';

export type ComponentAction = SelectableAction;
export const reducers = {
  base,
  selectable
};

export {
  SelectableState, BaseState
};
