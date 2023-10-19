import React from 'react';
import './App.css';

function TodoList(props) {
  return (
    <div>
      <li>{props.text}</li>
      <button className="btn-close" onClick={() => props.onSelect(props.id)} aria-label="Close"></button>
    </div>
  );
}

export default TodoList;
