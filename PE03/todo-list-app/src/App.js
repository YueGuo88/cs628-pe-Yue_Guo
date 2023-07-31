import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>To Do List App</h1>
      <ToDoList />
    </div>
  );
};

export default App;
