import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Tasks from "./Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTasks = (taskName) => {
    const newTask = {
      name: taskName,
      completed: false,
      id: nanoid(),
    };
    setTasks([...tasks, newTask]);
  };
  const removeTask = (taskId) => {
    const remainingTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(remainingTasks);
  };
  return (
    <section className="section-center">
      <Form addTasks={addTasks} />
      <Tasks tasks={tasks} removeTask={removeTask} />
    </section>
  );
};

export default App;
