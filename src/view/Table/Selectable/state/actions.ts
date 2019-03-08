import {Action, Dispatch} from 'redux';

export enum selectedAction {
  TOGGLE_SELECTION = 'TOGGLE_SELECTION'
}

export interface SelectToggleAction extends Action<selectedAction.TOGGLE_SELECTION> {
  selection: string;
  selected: boolean;
}

export const toggleSelect = (dispatch: Dispatch<SelectableAction>) =>
  (selection: string, selected: boolean) => dispatch({
    type: selectedAction.TOGGLE_SELECTION,
    selection,
    selected
  });

export type SelectableAction = SelectToggleAction;
