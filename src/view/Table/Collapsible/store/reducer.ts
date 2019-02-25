import {AppAction} from '../../../../actions';
import {dataAction} from '../../../../core/types';

export interface CollapsibleState {
  rows: string[];
}

const defaultState: CollapsibleState = {
  rows: []
};

export const reducer = (
  state: CollapsibleState = defaultState,
  action: AppAction
): CollapsibleState => {
  switch (action.type) {
  default:
    return state;
  }
};
