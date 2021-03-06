import React from "react";
import TodoItem from "./TodoItem";
//import "./TodoList.css";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(), // 2. add uuid to the item
          name: "Buy Milk",
          isDone: false,
        },
        {
          id: uuidv4(), // 3.add uuid to the item
          name: "Do push up",
          isDone: true,
        },
      ],
    };
  }

  createSetTodo(todo) {
    return (isDone) => {
      console.log("fired1");
      const currentTodo = this.state.todos.filter(
        (todoToFilter) => todoToFilter.id === todo.id
      )[0];
      currentTodo.isDone = isDone;
      console.log(this.state);
      this.setState({ todos: [...this.state.todos] });
    };
  }

  createSetTodo2(isDone, id) {
    console.log("fired2");
    console.log(this.state);
    // const currentTodo = this.state.todos.filter(
    //   (todoToFilter) => todoToFilter.id === id
    // )[0];
    // currentTodo.isDone = isDone;
    // this.setState({ todos: [...this.state.todos] });
  }

  createDeleteTodo(todo) {
    return () => {
      const todosWithoutItem = this.state.todos.filter(
        (todoToFilter) => todoToFilter.id !== todo.id
      );
      this.setState({ todos: [...todosWithoutItem] });
    };
  }

  displayTodos() {
    return this.state.todos.map((todo) => {
      const setTodo = this.createSetTodo(todo);
      const deleteTodo = this.createDeleteTodo(todo);

      return (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isDone={todo.isDone}
          setTodo={setTodo}
          deleteTodo={deleteTodo}
        />
      );
    });
  }
  handleChange = (event) => {
    this.setState({ newItemName: event.target.value });
  };
  addNewTodo() {
    const { newItemName: name } = this.state;
    if (!name || !name.length) {
      return;
    }

    this.setState({
      newItemName: "",
      todos: [
        ...this.state.todos,
        {
          id: uuidv4(),
          name: name,
          isDone: false,
        },
      ],
    });
  }
  render() {
    return (
      <div>
        <title>Test</title>
        <div>{this.props.title}</div>
        <input
          type="text"
          value={this.state.newItemName}
          onChange={this.handleChange}
          placeholder="Take a break"
        />
        <button onClick={() => this.addNewTodo()}>add</button>
        <div>{this.displayTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
