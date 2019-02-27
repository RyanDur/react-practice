import {AppAction} from '../../../../actions';
import {toggle} from '../../../../util/helpers';
import {collapsibleAction} from './actions';

export interface CollapsibleState {
  open: string[];
}

const defaultState: CollapsibleState = {
  open: []
};

export const reducer = (
  state: CollapsibleState = defaultState,
  action: AppAction
): CollapsibleState => {
  switch (action.type) {
  case collapsibleAction.TOGGLE_OPEN:
    return {open: toggle(action.name, state.open)};
  default:
    return state;
  }
};
