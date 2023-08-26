import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoTask = (newProps) => {
  const { task } = newProps;
  const { deleteTask, onCompleted } = useContext(TodoContext);
  const { id, taskName, completed } = task;

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onCompleted(id, e.target.checked)}
      />
      <p>{taskName}</p>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};

export default TodoTask;
