import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo.jsx";



describe("TopTodo component ", function () {

    const testTodos = [
    {
        title: "Test Title1",
        description: "Test Description1",
        priority: "1"
    }
    ,
    {   title: "Test Title2",
        description: "Test Description2",
        priority: "2"
    }
    ,
    {   title: "Test Title3",
        description: "Test Description3",
        priority: "3"}
    ]

    it("Renders without crashing", function () {
      render(<TopTodo todos={testTodos}/>);
    });

    it("Matches snapshot", function(){
        const {container} = render(<TopTodo todos={testTodos} />);
        expect(container).toMatchSnapshot();
    })

    it("Renders top priority todo for list of todos", function(){
        const {container} = render(<TopTodo todos={testTodos}/>);
        const title = container.getElementsByTagName('b')[0];
        expect(title.textContent).toEqual("Test Title1");
    })

});