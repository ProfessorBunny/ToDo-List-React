import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Tasks from "./Tasks";

const App = () => {
  const setLocalStorage = (tasks) => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  };
  // const getLocalStorage = (tasks) => {
  //   let taskList = localStorage.getItem("taskList");
  //   if (taskList) {
  //     taskList = JSON.parse(localStorage.getItem("taskList"));
  //   } else {
  //     taskList = [];
  //   }
  //   return taskList;
  // };
  // const [tasks, setTasks] = useState(getLocalStorage);

  const taskList = JSON.parse(localStorage.getItem("taskList") || "[]");

  const [tasks, setTasks] = useState(taskList);

  const addTasks = (taskName) => {
    const newTask = {
      name: taskName,
      completed: false,
      id: nanoid(),
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setLocalStorage(newTasks);
  };
  const editTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const editedTask = { ...task, completed: !task.completed };
        return editedTask;
      }
      return task;
    });

    setTasks(newTasks);
    setLocalStorage(newTasks);
  };

  const removeTask = (taskId) => {
    const remainingTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(remainingTasks);
    setLocalStorage(remainingTasks);
  };
  return (
    <section className="section-center">
      <Form addTasks={addTasks} />
      <Tasks tasks={tasks} removeTask={removeTask} editTask={editTask} />
    </section>
  );
};

export default App;
