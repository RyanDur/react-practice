import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import FancyTable from "./Table/FancyTable";

const App = () => (
  <div>
    <FancyTable/>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
);

export default App;