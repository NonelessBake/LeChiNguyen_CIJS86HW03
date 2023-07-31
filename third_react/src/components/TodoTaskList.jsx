import TodoTask from "./TodoTask";

function TodoTaskList(newProps) {
  const { todos, onCompleted, onDelete } = newProps;

  return (
    <ul className="show-tasks">
      {todos.map((todo, index) => (
        <TodoTask
          key={index}
          todo={todo}
          onDelete={onDelete}
          onCompleted={onCompleted}
        />
      ))}
    </ul>
  );
}

export default TodoTaskList;
