import React, { useState } from "react";
import TodoList from "./components/todoList/todoList";
import AddTodo from "./components/addTodo/addTodo";

const App = () => {
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => `Task number ${start + i * step}`
    );
  const [todos, setTodos] = useState(range(1, 1000, 1));

  const addTodo = (text) => {
    setTodos([text, ...todos]);
  };

  const updateTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;
    setTodos(updatedTodos);
  };

  const handleTodoDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={todos}
        onTodoUpdate={updateTodo}
        onTodoDelete={handleTodoDelete}
      />
    </div>
  );
};

export default App;
