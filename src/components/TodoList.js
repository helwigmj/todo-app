import React from "react";
import TodoEdit from "./TodoEdit";
import TodoView from "./ToDoView";

function TodoList(props) {
 if (props.isEditing) {
  return (
    <TodoEdit 
      id={props.id}
      name={props.name}
      completed={props.completed}
      key={props.id}
      date={props.date}
      isEditing={props.isEditing}
      toggleTaskEditing={props.toggleTaskEditing}
      toggleTaskCompleted={props.toggleTaskCompleted}
      deleteTask={props.deleteTask}
      editTask={props.editTask}
  />
  )
 } else {
  return (
    <TodoView
      id={props.id}
      name={props.name}
      completed={props.completed}
      key={props.id}
      date={props.date}
      isEditing={props.isEditing}
      toggleTaskEditing={props.toggleTaskEditing}
      toggleTaskCompleted={props.toggleTaskCompleted}
      deleteTask={props.deleteTask}
      editTask={props.editTask}
    />
  )
 }
}

export default TodoList;