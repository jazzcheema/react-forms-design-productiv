import { describe, it, expect } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo component", function () {

    const testTodo = {
        title: "Test Title1",
        description: "Test Description1",
        priority: "3"
    };

    it("renders without crashing", function () {
        render(<Todo todo={testTodo} />);
    });

    it("matches snapshot", function () {
        const {container} = render(<Todo todo={testTodo} />);
        expect(container).toMatchSnapshot();
    });

});