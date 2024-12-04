import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {  /* Check if the new todo is empty */
      return; /* Don't add if the input is empty */
    }
    const newTodoItem = { task: newTodo, completed: false };
    setTodos([...todos, newTodoItem]); /* Add new todo */
    setNewTodo(''); /*  Clear input after adding */
  };

  return (
    <div className="app">
      <Header />
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-button">Add</button>
      </div>
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
