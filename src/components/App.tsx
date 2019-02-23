import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import {Selectable} from './Table/Selectable';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render() {
    return (
      <>
        <Selectable defaultSelected={true}/>
      </>
    );
  }
}

export default App;
