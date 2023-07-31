import React from 'react';
import './ToDoTask.css';

const ToDoTask = ({ task, onDelete }) => {
  return (
    <li className="task-item">
      <span className="task-name">{task}</span>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default ToDoTask;
