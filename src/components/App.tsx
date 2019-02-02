import * as React from 'react';
import FancyTable from './Table/Fancy/connector';
import {Draggable} from './Table/Draggable';
import {Dropdown} from './Dropdown/Dropdown';

const list = [
  {value: 'foo', title: 'bar'},
  {value: 'face', title: 'your'}
];

const App = () => (
  <>
    <FancyTable/>
    <Draggable/>
    <Dropdown
      options={list}
      selectionFormat={(option) => option.title}>
      {list.map((option) => option.title)}
    </Dropdown>
  </>
);

export default App;
