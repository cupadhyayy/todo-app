import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, setTodos }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => {
        return (
          <ToDoItem key={index} todo={todo} todos={todos} setTodos={setTodos} />
        );
      })}
    </div>
  );
}

export default ToDoList;
