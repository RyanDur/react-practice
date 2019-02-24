import {Action, Dispatch} from 'redux';

export enum selectedAction {
  TOGGLE_SELECTION = 'TOGGLE_SELECTION'
}

export interface SelectToggleAction extends Action<selectedAction.TOGGLE_SELECTION> {
  selection: string;
}

export const toggleSelect = (dispatch: Dispatch<SelectableAction>) => (selection: string) => dispatch({
  type: selectedAction.TOGGLE_SELECTION,
  selection
});

export type SelectableAction = SelectToggleAction;
