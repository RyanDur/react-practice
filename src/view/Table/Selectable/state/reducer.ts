import {AppAction} from '../../../../actions';
import {updateSelected} from '../../../helpers';
import {selectedAction} from './actions';

export interface Selected {
  [selection: string]: boolean;
}

export interface SelectableState {
  selected: Selected;
}

const defaultState: SelectableState = {
  selected: {}
};

export const reducer = (
  state = defaultState,
  action: AppAction
): SelectableState => {
  switch (action.type) {
  case selectedAction.TOGGLE_SELECTION:
    return {selected: updateSelected(action, state.selected)};
  default:
    return state;
  }
};
