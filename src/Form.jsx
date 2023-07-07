import React, { useState } from "react";

const Form = ({ addTasks }) => {
  const [newTask, setNewTask] = useState("");
  const changeHandler = (e) => {
    setNewTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTasks(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h4>To Do List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newTask}
          onChange={changeHandler}
        />
        <button className="btn" type="submit">
          Add New Task
        </button>
      </div>
    </form>
  );
};

export default Form;
