import TodoTask from "./TodoTask";
import { TodoContext } from "./TodoContext";
import { useContext } from "react";

function TodoTaskList() {
  const { newTodoList } = useContext(TodoContext);
  return (
    <ul className="show-tasks">
      {newTodoList.map((task) => (
        <TodoTask key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TodoTaskList;
