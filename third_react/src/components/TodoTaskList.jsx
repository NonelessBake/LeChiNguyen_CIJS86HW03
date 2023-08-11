import TodoTask from "./TodoTask";

function TodoTaskList(newProps) {
  const { todoList, onCompleted, onDelete } = newProps;
  console.log(todoList);
  return (
    <ul className="show-tasks">
      {todoList.map((task) => (
        <TodoTask
          key={task.id}
          task={task}
          onCompleted={onCompleted}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoTaskList;
