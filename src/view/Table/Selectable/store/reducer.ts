import {AppAction} from '../../../../actions';
import {updateSelected} from '../../../helpers';
import {selectedAction} from './actions';

export interface SelectableState {
  selected: string[];
}

const defaultState: SelectableState = {
  selected: []
};

export const reducer = (
  state = defaultState,
  action: AppAction
): SelectableState => {
  switch (action.type) {
  case selectedAction.TOGGLE_SELECTION:
    return {selected: updateSelected(action.selection, state.selected)};
  default:
    return state;
  }
};
