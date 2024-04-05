import { describe, it, expect, vi } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("EditableTodo component", function () {

    const testTodo = {
        title: "Test Title1",
        description: "Test Description1",
        priority: "3"
    };


    function update() {
        return true;
    }

    it("renders without crashing", function () {
        render(<EditableTodo todo={testTodo} update={update} removeMe={() => true} />);
    });

    it("Matches snapshot", function () {
        const { container } = render(<EditableTodo todo={testTodo} update={update} removeMe={() => true} />);
        expect(container).toMatchSnapshot();
    });

    // it("renders form when edit button clicked, renders todo when submit button clicked", function () {


    //     const { container, debug } = render(
    //         <TodoForm
    //             initialFormData={testInitial}
    //             handleSave={handleSave} />);

    //     const titleInput = container.querySelector("#newTodo-title");
    //     const descriptionInput = container.querySelector("#newTodo-description");
    //     const priorityInput = container.querySelector("#newTodo-priority");

    //     fireEvent.change(titleInput, {target: {value: "test title"}})
    //     fireEvent.change(descriptionInput, {target: {value: "test description"}})
    //     fireEvent.change(priorityInput, {target: {value: "1"}})

    //     const submitBtn = container.querySelector(".NewTodoForm-addBtn");
    //     fireEvent.click(submitBtn);

    //     expect(titleInput.textContent).toEqual("");
    //     expect(descriptionInput.textContent).toEqual("");
    //     expect(priorityInput.value).toEqual("3");

    //     expect(formData).toEqual({
    //         title: "test title",
    //         description: "test description",
    //         priority: "1"
    //     })
    // });

    it("calls removeMe when delete button clicked", function() {
        function removeMe() {
            return true;
        }

        let mockRemoveMe = vi.fn(removeMe);

        const { container } = render(<EditableTodo todo={testTodo} update={update} removeMe={mockRemoveMe} />);

        const deleteBtn = container.querySelector(".EditableTodo-delBtn");
        fireEvent.click(deleteBtn);

        expect(mockRemoveMe.mock.calls.length).toEqual(1);
    })

});