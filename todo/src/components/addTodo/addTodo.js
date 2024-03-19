import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border border-gray-300 rounded px-2 py-1 flex-grow focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Add todo
      </button>
    </form>
  );
};

export default AddTodo;
