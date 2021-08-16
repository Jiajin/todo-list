import React from "react";
import "./TodoItem.css";

const TodoItemHook = ({ id, name, isDone, setTodo, deleteTodo }) => (
  <div className="todo-item">
    <span className="todo-item__completed" onClick={() => setTodo(id, !isDone)}>
      {isDone && <img alt="done" src={`${process.env.PUBLIC_URL}/tick.png`} />}
    </span>
    <span className="todo-item__name">{name}</span>
    <span onClick={() => deleteTodo(id)} className="todo-item__delete">
      X
    </span>
  </div>
);

export default TodoItemHook;
