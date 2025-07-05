import React from "react";

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  return (
    <div className="todo-card">
      <div
        className={`cursor-pointer flex-1 ${todo.done ? "todo-done" : "todo-text"}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </div>

      <div className="flex gap-2">
        <button onClick={() => onEdit(todo)} className="btn bg-yellow-500 hover:bg-yellow-600">
          Edit
        </button>
        <button onClick={() => onDelete(todo.id)} className="btn bg-red-500 hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
