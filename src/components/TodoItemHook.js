import React from "react";
import "./TodoItem.css";

const TodoItemHook = ({ id, name, isDone, setTodo, deleteTodo }) => (
  <div className="todo-item">
    <span
      aria-label="todo-checkbox"
      className="todo-item__completed"
      onClick={() => setTodo(id, !isDone)}
    >
      {isDone && (
        <img
          aria-label="checkbox-tick"
          alt="done"
          src={`${process.env.PUBLIC_URL}/tick.png`}
        />
      )}
    </span>
    <span className="todo-item__name">{name}</span>
    <span
      aria-label="delete-todo"
      onClick={() => deleteTodo(id)}
      className="todo-item__delete"
    >
      X
    </span>
  </div>
);

export default TodoItemHook;
