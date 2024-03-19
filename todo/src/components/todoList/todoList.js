import React, { useEffect } from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todos, onTodoUpdate, onTodoDelete }) => {
  useEffect(() => {
    console.log("element rerenders");
  });
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onTodoUpdate={onTodoUpdate}
          onTodoDelete={onTodoDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
