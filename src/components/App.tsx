import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import {Base, Draggable, Fancy} from './Table';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render() {
    return (
      <>
        <Base/>
      </>
    );
  }
}

export default App;
