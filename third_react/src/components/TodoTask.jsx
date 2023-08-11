function TodoTask(newProps) {
  const { task, onCompleted, onDelete } = newProps;
  return (
    <>
      <li className="task">
        <div className="task-container">
          <input
            id="check"
            checked={task.completed}
            type="checkbox"
            onChange={(e) => onCompleted(task.id, e.target.checked)}
          />
          <span className="name-task">{task.taskName}</span>
        </div>
        <button
          className="delete-task"
          type="button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default TodoTask;
