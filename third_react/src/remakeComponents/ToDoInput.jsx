import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const ToDoInput = () => {
  const { onChangeInput, inputTask } = useContext(TodoContext);
  return (
    <div>
      <form action="input-task">
        <input
          type="text"
          value={inputTask}
          onChange={(e) => onChangeInput(e)}
        />
      </form>
    </div>
  );
};

export default ToDoInput;
