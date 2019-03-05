import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import ErrorBoundary from './ErrorBoundary/connector';
import {Base} from './Table/Base';
import {Expandable} from './Table/Expandible';
import {Selectable} from './Table/Selectable';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render() {
    return (
      <ErrorBoundary>
        <Base/>
        <Selectable defaultSelected={true} />
        <Expandable />
      </ErrorBoundary>
    );
  }
}

export default App;
