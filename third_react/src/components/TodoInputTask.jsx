import { useContext } from "react";
import { TodoContext, TodoUpdateContext } from "./TodoContext";

function TodoInputTask() {
  const { inputTask } = useContext(TodoContext);
  const { onChangeHandler } = useContext(TodoUpdateContext);
  return (
    <div className="enter-task-container">
      <input
        value={inputTask}
        type="text"
        placeholder="Enter new task"
        id="enter-task"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default TodoInputTask;
