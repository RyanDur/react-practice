import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import View from './view';
import './index.css';
import {store} from './store';

ReactDom.render(
  <Provider store={store}>
    <View/>
  </Provider>,
  document.getElementById('root')
);
