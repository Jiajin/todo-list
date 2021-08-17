import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoListHook from "./components/TodoListHook";

function App() {
  const title = "MyFirstTodoList";
  const [todoListArray, setTodoListArray] = useState([title]);
  const [newListName, setNewListName] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    setNewListName(event.target.value);
  };
  console.log(todoListArray);
  const addNewList = (event) => {
    const listName = newListName;
    if (!listName || !listName.length) {
      return;
    } else {
      //setTodoListArray(...todoListArray, listName);
      setTodoListArray([...todoListArray, listName]);
    }
  };
  return (
    <div className="App">
      <div>Add New Todo List</div>
      <input
        aria-label="addnewlist"
        type="text"
        value={newListName}
        onChange={onChangeHandler}
        placeholder="New List Name here"
      />
      <button onClick={addNewList}>Add-List</button>

      {/* {todoListArray.map((todoList) => (
        <TodoList title={todoList}></TodoList>
      ))} */}
      <br></br>
      {todoListArray.map((todoList) => (
        <TodoListHook title={todoList}></TodoListHook>
      ))}
    </div>
  );
}

export default App;
