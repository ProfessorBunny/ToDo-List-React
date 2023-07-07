import SingleTask from "./SingleTask";

const Tasks = ({ tasks, removeTask }) => {
  return (
    <div className="items">
      {tasks.map((task) => {
        return <SingleTask key={task.id} task={task} removeTask={removeTask} />;
      })}
    </div>
  );
};
export default Tasks;
