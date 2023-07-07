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
  const removeTask = (itemId) => {};
  return (
    <section className="section-center">
      <Form addTasks={addTasks} removeTask={removeTask} />
      <Tasks tasks={tasks} />
    </section>
  );
};

export default App;
