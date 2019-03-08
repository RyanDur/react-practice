import {carouselAction, CarouselAction} from './connector';

export interface CarState {
  carousel: CarouselState;
}

interface CarouselState {
  currentWindow: number;
}

const defaultState: CarouselState = {
  currentWindow: 0
};

export default (
  state: CarouselState = defaultState,
  action: CarouselAction
): CarouselState => {
  switch (action.type) {
  case carouselAction.CHANGE_WINDOW:
    return {currentWindow: action.window};
  default:
    return state;
  }
};
