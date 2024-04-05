import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo like {id, title, description, priority}
 * - update(): fn to call to update a todo
 * - removeMe(): fn to call to remove this todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ update, removeMe, todo }) {

  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(currState => !currState);
  }

  /** Call removeMe fn passed to this. */
  function handleDelete() {
    removeMe(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
    toggleEdit();
  }

  return (
    <div className="EditableTodo">

      {isEditing
        ? (
          <TodoForm
            initialFormData={todo}
            handleSave={handleSave} />
        ) : (
          <div className="mb-3">
            <div className="float-end text-sm-end">
              <button
                className="EditableTodo-toggle btn-link btn btn-sm"
                onClick={toggleEdit}>
                Edit
              </button>
              <button
                className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                onClick={handleDelete}>
                Del
              </button>
            </div>
            <Todo todo={todo} />
          </div>
        )
      }

    </div>
  );
}

export default EditableTodo;
