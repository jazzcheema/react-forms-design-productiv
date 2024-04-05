import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";


describe("TodoForm component", function () {

    const testInitial = {
        title: "",
        description: "",
        priority: ""
    }

    const testTodo =
    {
        title: "Test Title1",
        description: "Test Description1",
        priority: "1"
    }


    it("renders without crashing", function () {
      render(<TodoForm initialFormData={testInitial} handleSave={()=> true}/>);
    });

    it("Matches snapshot", function(){
        const {container} = render(<TodoForm initialFormData={testInitial} handleSave={()=> true}/>);
        expect(container).toMatchSnapshot();
    });

    it("clears form and handles save", function (){
        const{container, debug} = render(<TodoForm initialFormData={testTodo} handleSave={()=> true}/>);
        debug(container)
        expect(container)


    })

})