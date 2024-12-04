import React from 'react';

function ToDoItem({ todo, todos, setTodos }) {
  /*  Mark as complete or incomplete */
  const handleComplete = () => {
    const updatedTodos = todos.map(t => {
      if (t === todo) {
        const updatedTodo = { ...t, completed: !t.completed }; /*  Toggle completion */
        return updatedTodo;
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  /*  Delete the todo */
  const handleDelete = () => {
    const updatedTodos = todos.filter(t => t !== todo); /*  Filter out the deleted todo */
    setTodos(updatedTodos);
  };

  /* Edit the todo */
  const handleEdit = () => {
    const newTask = prompt("Edit your task:", todo.task);
    if (newTask) {
      const updatedTodos = todos.map(t => {
        if (t === todo) {
          const updatedTodo = { ...t, task: newTask };
          return updatedTodo;
        }
        return t;
      });
      setTodos(updatedTodos);
    }
  };

  /* Determine the text decoration based on the completion status */
  let textDecoration = 'none';
  if (todo.completed) {
    textDecoration = 'line-through';
  }

  return (
    <div className="todo-item">
      <span style={{ textDecoration: textDecoration }}>
        {todo.task}
      </span>
      <div className="button-container">
        <button onClick={handleComplete}>✔️</button>
        <button onClick={handleEdit}>✏️</button>
        <button onClick={handleDelete}>🗑️</button>
      </div>
    </div>
  );
}

export default ToDoItem;
