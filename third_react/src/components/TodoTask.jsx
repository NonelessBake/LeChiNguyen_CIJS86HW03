import { Status } from "./TodoApp";

function TodoTask(newProps) {
  let { todo, onDelete, onCompleted } = newProps;
  return (
    <>
      <li
        className="task"
        style={{ opacity: todo.status === Status.Completed ? "0.5" : "1" }}
      >
        <div className="task-container">
          <span
            className="check-task"
            style={{
              backgroundColor:
                todo.status === Status.Completed
                  ? "rgba(42, 42, 238, 0.8)"
                  : "white",
            }}
            onClick={() => onCompleted(todo.id)}
          >
            {todo.status === Status.Completed && <span>&#10004;</span>}
          </span>
          <span className="name-task">{todo.taskName}</span>
        </div>
        <button className="delete-task" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </li>
    </>
  );
}

export default TodoTask;
