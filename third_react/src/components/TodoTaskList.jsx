import TodoTask from "./TodoTask";

function TodoTaskList(newProps) {
  const { todoList, onCompleted, onDelete } = newProps;
  //
  return (
    <ul className="show-tasks">
      {todoList.map((task) => (
        <TodoTask
          key={task.id}
          task={task}
          onDelete={onDelete}
          onCompleted={onCompleted}
        />
      ))}
    </ul>
  );
}

export default TodoTaskList;
