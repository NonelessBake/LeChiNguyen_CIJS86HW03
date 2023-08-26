import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoTask from "./TodoTask";

const TodoTaskList = () => {
  const { taskByStatus } = useContext(TodoContext);
  return (
    <div>
      {taskByStatus.map((task) => (
        <TodoTask task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TodoTaskList;
