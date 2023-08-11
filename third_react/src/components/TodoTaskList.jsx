import TodoTask from "./TodoTask";

function TodoTaskList(newProps) {
  const { todoList } = newProps;
  //
  return (
    <ul className="show-tasks">
      {todoList.map((task) => (
        <TodoTask key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TodoTaskList;
