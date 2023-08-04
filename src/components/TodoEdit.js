import React, { useState } from "react";
// import { TaskContext } from "../App";

function TodoEdit(props) {
  // TODO: add useContext to fix task edit functionality
  const [newName, setNewName] = useState("");

  // functions
  function handleChange(e) {
    setNewName(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    props.toggleTaskEditing(props.id);
  };
  // UI return statement
  return (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={() => props.toggleTaskEditing(props.id)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
}

export default TodoEdit; 