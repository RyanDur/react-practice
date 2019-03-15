import * as React from 'react';
import {Component} from 'react';
import {Carousel} from './Carousel';
import {AppProps} from './connector';
import {ErrorBoundary} from './ErrorBoundary';
import {Base} from './Table/Base';
import {Draggable} from './Table/Draggable';
import {Expandable} from './Table/Expandible';
import {Selectable} from './Table/Selectable';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render = () =>
    <ErrorBoundary>
      <Carousel>
        <Base/>
        <Selectable defaultSelected={true}/>
        <Expandable/>
        <Draggable/>
      </Carousel>
    </ErrorBoundary>;
}

export default App;
