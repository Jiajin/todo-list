import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders default text", () => {
  render(<App />);
  const element = screen.getByText(/Add New Todo List/i);
  expect(element).toBeInTheDocument();
});

test("should increase the list when there is input and button is clicked", () => {
  const { getByText, getByLabelText } = render(<App />);
  const addOneButton = getByText("Add-List");

  const todoTextInput = getByLabelText("addnewlist"); //Identifies the txtInput using "filter-text"
  fireEvent.change(todoTextInput, {
    target: { value: "todo1" },
  }); //fireEvent to change the value of the prev identified input from "" to "todo1"

  fireEvent.click(addOneButton);
  expect(getByText("todo1")).toBeInTheDocument();
});
