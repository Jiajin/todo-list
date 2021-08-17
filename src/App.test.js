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
  const addOneButton = getByText("Add-List"); //get button

  const todoTextInput = getByLabelText("addnewlist"); //Identifies the txtInput using aria label
  fireEvent.change(todoTextInput, {
    target: { value: "2ndtodolist" },
  }); //fireEvent to change the value of the prev identified input from "" to "todo1"

  fireEvent.click(addOneButton);
  expect(getByText("2ndtodolist")).toBeInTheDocument();
});
