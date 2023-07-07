import React, { useState } from "react";

const Form = () => {
  const [newItem, setNewItem] = useState("");
  const changeHandler = (e) => {
    setNewItem(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h4>To Do List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
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
