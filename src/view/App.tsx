import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import {ErrorBoundary} from './ErrorBoundary';
import {Paginator} from './Paginator';
import {Base, Draggable, Expandable, Selectable} from './Table';
import {DisplayWindow} from './DisplayWindow';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render = () =>
    <ErrorBoundary>
      <Paginator>
        <DisplayWindow title={'Base'}>
          <Base/>
        </DisplayWindow>
        <DisplayWindow title={'Selectable'}>
          <Selectable defaultSelected={true}/>
        </DisplayWindow>
        <DisplayWindow title={'Expandable'}>
          <Expandable/>
        </DisplayWindow>
        <DisplayWindow title={'Draggable'}>
          <Draggable/>
        </DisplayWindow>
      </Paginator>
    </ErrorBoundary>;
}

export default App;
