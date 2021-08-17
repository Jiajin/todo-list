import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import TodoItemHook from "./TodoItemHook";
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

test("Should render default todo list content", () => {
  const { getAllByTestId } = render(<TodoListHook />);
  const todoLists = getAllByTestId("todolist-title");

  expect(todoLists.length).toEqual(1);
});

test("Should render  an  image  when the span element is clicked", () => {
  const { getByLabelText, getAllByLabelText } = render(<TodoListHook />);
  const firstCheckbox = getAllByLabelText("todo-checkbox")[0]; //Identifies the checkbox"

  expect(screen.queryByLabelText("checkbox-tick")).toBeNull();
  fireEvent.click(firstCheckbox);

  expect(getByLabelText("checkbox-tick")).toBeInTheDocument();
});

// test("Should remove todoitem  when the span element is clicked", () => {
//   const { getByLabelText, getAllByLabelText } = render(<TodoItemHook />);
//   const firstCheckbox = getAllByLabelText("delete-todo")[0]; //Identifies the X button

//   expect(screen.queryByLabelText("checkbox-tick")).toBeNull();
//   fireEvent.click(firstCheckbox);

//   expect(getByLabelText("checkbox-tick")).toBeInTheDocument();
// });

const todoitem = { id: "1235789", name: "TestDataToBeDel", isDone: false };

describe("deleteTodo", () => {
  it("should call deleteTodo when clear icon is clicked", async () => {
    const deleteTodo = jest.fn();
    render(<TodoItemHook {...todoitem} deleteTodo={deleteTodo} />);

    const { getByLabelText, getAllByLabelText } = render(<TodoItemHook />);
    const firstCrossBox = getAllByLabelText("delete-todo")[0]; //Identifies the X button

    fireEvent.click(firstCrossBox);

    expect(deleteTodo).toHaveBeenCalled();
  });
});
