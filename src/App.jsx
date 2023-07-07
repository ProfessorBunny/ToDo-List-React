import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";

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
  console.log(tasks);
  return (
    <section className="section-center">
      <Form addTasks={addTasks} />
    </section>
  );
};

export default App;
