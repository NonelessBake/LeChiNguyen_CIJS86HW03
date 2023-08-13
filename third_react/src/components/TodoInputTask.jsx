import { useTodo, useTodoUpdate } from "./TodoContext";

function TodoInputTask() {
  const { inputTask } = useTodo();
  const { onChangeHandler } = useTodoUpdate();
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
