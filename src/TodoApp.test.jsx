import { describe, it, expect } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp.jsx";

describe("TodoApp component ", function () {
  const testTodos = [
    {
      title: "Test Title1",
      description: "Test Description1",
      priority: "1",
      id: 1,
    },

    {
      title: "Test Title2",
      description: "Test Description2",
      priority: "2",
      id: 2,
    },

    {
      title: "Test Title3",
      description: "Test Description3",
      priority: "3",
      id: 3,
    },
  ];

  it("Renders without crashing", function () {
    render(<TodoApp initialTodos={testTodos} />);
  });

  it("Matches snapshot", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);
    expect(container).toMatchSnapshot();
  });

  it("Removes a todo", function () {
    const { queryAllByText, debug, container } = render(
      <TodoApp initialTodos={testTodos} />
    );
    const deleteBtns = queryAllByText("Del");
    expect(deleteBtns.length).toEqual(3);

    const deleteBtnFire = container.querySelector(".EditableTodo-delBtn");
    fireEvent.click(deleteBtnFire);

    const deleteBtnsAfterDelete = queryAllByText("Del");
    expect(deleteBtnsAfterDelete.length).toEqual(2);
  });

  
  it("Should update a todo", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);

    const editBtn = container.querySelector(".EditableTodo-toggle");

    fireEvent.click(editBtn);
    const descriptionArea = container.querySelector("#newTodo-description")

    fireEvent.change(descriptionArea, {target: {value: "Test Change Description"}});
    const submitUpdateBtn = container.querySelector(".NewTodoForm-addBtn")

    fireEvent.click(submitUpdateBtn)
    expect(container).toContainHTML("Test Change Description")
  });
});
