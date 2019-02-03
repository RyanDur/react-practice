import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import {Draggable} from './Table';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render() {
    return (
      <>
        <Draggable/>
      </>
    );
  }
}

export default App;
