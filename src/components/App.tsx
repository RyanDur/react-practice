import * as React from 'react';
import Table from './Table/connector';
import {Dropdown} from './Dropdown/Dropdown';

const list = [
  {value: 'foo', title: 'bar'},
  {value: 'face', title: 'your'}
];

const App = () => (
  <>
    <Table/>
    <Dropdown
      options={list}
      selectionFormat={(option) => option.title}>
      {list.map((option) => option.title)}
    </Dropdown>
  </>
);

export default App;