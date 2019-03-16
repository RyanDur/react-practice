import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import {ErrorBoundary} from './ErrorBoundary';
import {Paginator} from './Paginator';
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
      <Paginator>
        <Base/>
        <Selectable defaultSelected={true}/>
        <Expandable/>
        <Draggable/>
      </Paginator>
    </ErrorBoundary>;
}

export default App;
