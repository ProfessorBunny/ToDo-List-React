import SingleTask from "./SingleTask";

const Tasks = ({ tasks, removeTask, editTask }) => {
  return (
    <div className="items">
      {tasks.map((task) => {
        return (
          <SingleTask
            key={task.id}
            task={task}
            removeTask={removeTask}
            editTask={editTask}
          />
        );
      })}
    </div>
  );
};
export default Tasks;
