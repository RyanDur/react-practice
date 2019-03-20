import * as React from 'react';
import {Component} from 'react';
import {AppProps} from './connector';
import {ErrorBoundary} from './ErrorBoundary';
import {Paginator} from './Paginator';
import {Base} from './Table/Base';
import {Draggable} from './Table/Draggable';
import {Expandable} from './Table/Expandible';
import {Selectable} from './Table/Selectable';
import {Window} from './Window';

export class App extends Component<AppProps> {
  componentDidMount() {
    this.props.connect();
  }

  render = () =>
    <ErrorBoundary>
      <Paginator>
        <Window title={'Base'}>
          <Base/>
        </Window>
        <Window title={'Selectable'}>
          <Selectable defaultSelected={true}/>
        </Window>
        <Window title={'Expandable'}>
          <Expandable/>
        </Window>
        <Window title={'Draggable'}>
          <Draggable/>
        </Window>
      </Paginator>
    </ErrorBoundary>;
}

export default App;
