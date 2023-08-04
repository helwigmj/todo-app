import React, {useContext} from "react";
import TodoEdit from "./TodoEdit";
import TodoView from "./ToDoView";
import { TaskContext } from "../App";

function TodoList(props) {
  const {tasks} = useContext(TaskContext);
  const taskView = tasks.map((task) => {
    if (task.isEditing) {
      return (
        <TodoEdit
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.name}
          date={task.date}
          isEditing={task.isEditing}
          toggleTaskEditing={props.toggleTaskEditing}
          editTask={props.editTask}
      />
      )
    } else {
      return (
        <TodoView
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.name}
          date={task.date}
          isEditing={task.isEditing}
          toggleTaskEditing={props.toggleTaskEditing}
          toggleTaskCompleted={props.toggleTaskCompleted}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
        />
      )
    }
  });
  return (
    <ul
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading">
      {taskView}
    </ul>
  )
}

export default TodoList;