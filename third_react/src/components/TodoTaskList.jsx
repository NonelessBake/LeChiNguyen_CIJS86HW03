import TodoTask from "./TodoTask";
import { useTodo } from "./TodoContext";

function TodoTaskList() {
  const { newTodoList } = useTodo();

  return (
    <ul className="show-tasks">
      {newTodoList.map((task) => (
        <TodoTask key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TodoTaskList;
