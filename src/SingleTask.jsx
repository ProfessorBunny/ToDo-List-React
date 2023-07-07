import { useState } from "react";

const SingleTask = ({ task, removeTask, editTask }) => {
  //   const [isChecked, setIsChecked] = useState(task.completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => {
          //   setIsChecked((prevState) => !prevState);
          editTask(task.id);
        }}
      />
      <p style={{ textDecoration: task.completed && "line-through" }}>
        {task.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => {
          removeTask(task.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};
export default SingleTask;
