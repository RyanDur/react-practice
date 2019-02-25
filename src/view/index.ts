import {AppMiddleware} from '../types';
import {default as App} from './connector';
import {base, BaseState} from './Table/Base';
import {collapsible, CollapsibleState} from './Table/Collapsible';
import {selectable, SelectableAction, SelectableState} from './Table/Selectable';

export type ViewAction = SelectableAction;
export interface ViewState {
  base: BaseState;
  selectable: SelectableState;
  collapsible: CollapsibleState;
}
export const middleware: AppMiddleware[] = [];
export const reducers = {
  base,
  selectable,
  collapsible
};

export default App;
