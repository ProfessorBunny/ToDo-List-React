import { useState } from "react";

const SingleTask = ({ task, removeTask }) => {
  const [isChecked, setIsChecked] = useState(task.completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked((prevState) => !prevState);
        }}
      />
      <p style={{ textDecoration: isChecked && "line-through" }}>{task.name}</p>
      <button className="btn remove-btn" type="button">
        Remove
      </button>
    </div>
  );
};
export default SingleTask;
