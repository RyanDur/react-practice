import * as React from 'react';
import {Component} from 'react';
import {Carousel} from './Carousel';
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
        <Carousel>
          <Base classes={['window', 'top']}/>
          <Selectable defaultSelected={true} classes={['window', 'middle']} />
          <Expandable classes={['window', 'bottom']} />
        </Carousel>
      </ErrorBoundary>
    );
  }
}

export default App;
