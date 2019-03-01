import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import {Expandable} from './Table/Expandible';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render() {
    return (
      <>
        <Expandable />
      </>
    );
  }
}

export default App;
