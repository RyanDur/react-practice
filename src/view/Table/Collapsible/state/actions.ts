import {Action, Dispatch} from 'redux';

export enum collapsibleAction {
  TOGGLE_OPEN = 'TOGGLE_OPEN'
}
export interface CollapsibleToggleAction extends Action<collapsibleAction.TOGGLE_OPEN> {
  name: string;
}

export type CollapsibleAction = CollapsibleToggleAction;

export const toggleOpen = (dispatch: Dispatch<CollapsibleAction>) =>
  (name: string) => dispatch({type: collapsibleAction.TOGGLE_OPEN, name});
