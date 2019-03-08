import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {AppState} from '../../../types';
import {Carousel} from '../Carousel';

export interface WindowStateProps {
  currentWindow: number;
}

export interface WindowDispatchProps {
  handleChange: (index: number) => void;
}

export enum carouselAction {
  CHANGE_WINDOW = 'CHANGE_WINDOW'
}

export interface CarouselAction extends Action<carouselAction.CHANGE_WINDOW> {
  window: number;
}

const changeWindow = (dispatch: Dispatch<CarouselAction>) => (window: number) => dispatch({
  type: carouselAction.CHANGE_WINDOW,
  window
});

const currentWindow = (state: AppState) => state.carousel.currentWindow;

export default connect<WindowStateProps, WindowDispatchProps>(
  (state: AppState) => ({
    currentWindow: currentWindow(state)
  }),
  (dispatch: Dispatch<CarouselAction>) => ({
    handleChange: changeWindow(dispatch)
  })
)(Carousel);
