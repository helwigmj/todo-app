import React, { createContext, useContext, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

export const TaskContext = createContext();
function App() {
  // variables
  const [tasks, setTasks] = useState([]);
  const taskNoun = tasks.length !== 1 ? "tasks" : "task";
  const listHeadingText = `${tasks.length} ${taskNoun} remaining`;
  
  // functions
  function addTask(name, date) {
    const newTask = { id: `${Math.random()}`, name, date, completed: false };
    setTasks([...tasks, newTask]);
  };

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id = task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
    console.log('editTask tasks after setTasks: ', tasks);
  };  

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id = task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  function toggleTaskEditing(id) {
    const updatedTasks = tasks.map((task) => {
      if (id = task.id) {
        return { ...task, isEditing: !task.isEditing }
      }
      return task;
    });
    console.log('toggleTaskEditing tasks after setTasks: ', tasks);
    setTasks(updatedTasks);
  };

  // UI return statement
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={addTask}/>
        <h2 id="list-heading">{listHeadingText}</h2>
          <TodoList
            tasks={tasks}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleTaskEditing={toggleTaskEditing}
            toggleTaskCompleted={toggleTaskCompleted}
          />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
