import React, { useState } from "react";

const TodoItem = ({ todo, index, onTodoUpdate, onTodoDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo);
  const [clickCount, setClickCount] = useState(null);
  const [isDone, setIsDone] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
    if (clickCount === null) {
      setClickCount(1);
    } else {
      setClickCount(clickCount + 1);
    }
  };

  const handleInputChange = (event) => {
    setEditText(event.target.value);
  };

  const handleInputBlur = () => {
    onTodoUpdate(index, editText);
    setEditing(false);
  };

  const handleCheckboxChange = () => {
    setIsDone(!isDone);
  };

  const handleDeleteClick = () => {
    onTodoDelete(index);
  };

  return (
    <li className="flex items-center space-x-4">
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleCheckboxChange}
        className="h-4 w-4 text-blue-500 focus:ring-blue-400"
      />
      <div className="flex items-center space-x-4" onClick={handleEditClick}>
        {editing ? (
          <input
            autoFocus
            type="text"
            value={editText}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          />
        ) : (
          <span className={isDone ? "line-through" : ""}>{todo}</span>
        )}
      </div>
      <button
        onClick={handleDeleteClick}
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
      >
        Delete
      </button>
      <span className="text-gray-500">- Click Count: {clickCount}</span>
    </li>
  );
};

export default TodoItem;
