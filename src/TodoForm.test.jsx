import { describe, it, expect } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";


describe("TodoForm component", function () {

    const testInitial = {
        title: "",
        description: "",
        priority: "3"
    };

    it("renders without crashing", function () {
        render(<TodoForm initialFormData={testInitial} handleSave={() => true} />);
    });

    it("Matches snapshot", function () {
        const { container } = render(<TodoForm initialFormData={testInitial} handleSave={() => true} />);
        expect(container).toMatchSnapshot();
    });

    it("clears form and handles save on button click", function () {
        let formData;
        function handleSave(data) {
            formData = data;
        }

        const { container, debug } = render(
            <TodoForm
                initialFormData={testInitial}
                handleSave={handleSave} />);

        const titleInput = container.querySelector("#newTodo-title");
        const descriptionInput = container.querySelector("#newTodo-description");
        const priorityInput = container.querySelector("#newTodo-priority");

        fireEvent.change(titleInput, {target: {value: "test title"}})
        fireEvent.change(descriptionInput, {target: {value: "test description"}})
        fireEvent.change(priorityInput, {target: {value: "1"}})

        const submitBtn = container.querySelector(".NewTodoForm-addBtn");
        fireEvent.click(submitBtn);

        expect(titleInput.textContent).toEqual("");
        expect(descriptionInput.textContent).toEqual("");
        expect(priorityInput.value).toEqual("3");

        expect(formData).toEqual({
            title: "test title",
            description: "test description",
            priority: "1"
        })
    });

});