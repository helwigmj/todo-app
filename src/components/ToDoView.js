import React from "react";

function TodoEdit(props) {
  
  return(
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name} | Due by: {props.date}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => props.toggleTaskEditing(props.id)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
}

export default TodoEdit; 