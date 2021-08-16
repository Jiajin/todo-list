import { render, screen, fireEvent } from "@testing-library/react";
import TodoListHook from "./TodoListHook";

test("should increase  the todolist when there is input and button is clicked", () => {
  const { getByText, getByLabelText } = render(<TodoListHook />);
  const addOneButton = getByText("add");

  const todoTextInput = getByLabelText("addtodo-text"); //Identifies the txtInput using "filter-text"
  fireEvent.change(todoTextInput, {
    target: { value: "todo1" },
  }); //fireEvent to change the value of the prev identified input from "" to "todo1"

  fireEvent.click(addOneButton);
  expect(getByText("todo1")).toBeInTheDocument();
});
