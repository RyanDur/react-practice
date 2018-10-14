import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import './index.css';
import {store} from './store';

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);