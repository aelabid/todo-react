import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todos, onTodoUpdate, onTodoDelete }) => {
  useEffect(() => {
    console.log("element rerenders");
  });
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.floor(scrollTop / 40);
  const endIndex = Math.min(1000, Math.floor((scrollTop + 384) / 40) + 2);

  const generateRows = () => {
    let items = [];
    for (let i = startIndex; i < endIndex; i++) {
      items.push(
        <TodoItem
          key={i}
          todo={todos[i]}
          index={i}
          onTodoUpdate={onTodoUpdate}
          onTodoDelete={onTodoDelete}
          top={`${i * 40}`}
        />
      );
    }
    return items;
  };

  return (
    <ul
      className="space-y-2 overflow-y-scroll relative"
      onScroll={(e) => {
        setScrollTop(e.currentTarget.scrollTop);
      }}
      style={{ height: "384px" }}
    >
      {generateRows()}
    </ul>
  );
};

export default TodoList;
