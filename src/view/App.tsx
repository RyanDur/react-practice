import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import {Collapsible} from './Table/Collapsible';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render() {
    return (
      <>
        <Collapsible />
      </>
    );
  }
}

export default App;
