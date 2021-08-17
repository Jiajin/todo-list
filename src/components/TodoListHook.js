import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import TodoItemHook from "./TodoItemHook";

const TodoListHook = ({ title }) => {
  const [todoArray, setTodoArray] = useState({
    todos: [
      { id: uuidv4(), name: "Buy Milk", isDone: false },
      { id: uuidv4(), name: "Do push up", isDone: false },
    ],
  });

  const [newTodo, setNewToDo] = useState("");

  const checkTodoItem = (id, isDone) => {
    console.log("entered checktodoItem");
    let todoIndex = todoArray.todos.findIndex((todo) => todo.id === id);
    let copyOfState = [...todoArray.todos];
    copyOfState[todoIndex].isDone = isDone;
    setTodoArray({ todos: [...copyOfState] });
  };

  const deleteTodoItem = (id) => {
    console.log("entered checktodoItem");
    setTodoArray({
      todos: [...todoArray.todos.filter((todo) => todo.id !== id)],
    });
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    setNewToDo(event.target.value);
  };

  const addNewTodo = () => {
    if (!newTodo || !newTodo.length) {
      return;
    }

    setTodoArray({
      todos: [
        ...todoArray.todos, //This is the original content of the  items, using ...to access
        {
          //The new item to add at the end
          id: uuidv4(),
          name: newTodo,
          isDone: false,
        },
      ],
    });
    setNewToDo("");
  };

  return (
    <div>
      <div>Add New Todo Item</div>
      <input
        aria-label="addtodo-text"
        type="text"
        value={newTodo}
        onChange={onChangeHandler}
        placeholder="Take a break"
      />
      <button onClick={() => addNewTodo()}>add</button>
      <div data-testid="todolist-title">{title}</div>
      <div>
        {todoArray.todos.map((todo) => (
          <div>
            <TodoItemHook
              id={todo.id}
              name={todo.name}
              isDone={todo.isDone}
              setTodo={checkTodoItem}
              deleteTodo={deleteTodoItem}
            ></TodoItemHook>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListHook;
