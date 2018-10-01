import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Table from './Table/Table';

const App = () => (
  <div>
    <Table/>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
);

export default App;