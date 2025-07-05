import React, { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => { //HERE WER AREING GETTING THE LOCALSTRAGE DATA
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  const [input, setInput] = useState(""); //CREATING USESTATE FOR STROING AND UPDATING INPUT VALEUS SWIFLTY
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (isEdit) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setIsEdit(false);
      setEditId(null);
    }
     else {
      const newTodo = {
        id: Date.now(),
        text: input,
        done: false,
      };
      setTodos([newTodo, ...todos]); //here is the main flow    
    }

    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setIsEdit(true);
    setEditId(todo.id);
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="container-center">
      <h2 className="text-2xl font-semibold mb-4">📝 Tailwind Todo App</h2>

      <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter a todo..."
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn">
          {isEdit ? "Update" : "Add"}
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet 😅</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggle={toggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TodoApp;
