import {AppAction} from '../../../../actions';
import {toggle} from '../../../../util/helpers';
import {collapsibleAction} from './actions';

export interface ExpandableState {
  open: string[];
}

const defaultState: ExpandableState = {
  open: []
};

export const reducer = (
  state: ExpandableState = defaultState,
  action: AppAction
): ExpandableState => {
  switch (action.type) {
  case collapsibleAction.TOGGLE_OPEN:
    return {open: toggle(action.name, state.open)};
  default:
    return state;
  }
};
