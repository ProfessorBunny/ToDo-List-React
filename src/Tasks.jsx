import SingleTask from "./SingleTask";

const Tasks = ({ tasks, removeTask }) => {
  return (
    <div className="items">
      {tasks.map((task) => {
        return <SingleTask key={task.id} item={task} removeItem={removeTask} />;
      })}
    </div>
  );
};
export default Tasks;
