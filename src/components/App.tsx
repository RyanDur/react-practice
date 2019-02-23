import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import {Base} from './Table/Base';
import {Selectable} from './Table/Selectable';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render() {
    return (
      <>
        <Base/>
        <Selectable defaultSelected={true}/>
      </>
    );
  }
}

export default App;
