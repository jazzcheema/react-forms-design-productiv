import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  let top = todos.reduce(
    (acc, cur) => Number(cur.priority) < Number(acc.priority) ? cur : acc, todos[0]);

  return <Todo todo={top} />;
}

export default TopTodo;