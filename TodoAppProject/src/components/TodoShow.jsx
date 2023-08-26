import { useContext } from "react";
import "../assets/style/todoShow.css";
import { TodoContext, TodoContextUpdate } from "../context/TodoContextProvider";

const TodoShow = () => {
  const { status } = useContext(TodoContext);
  const { onChangeStatus } = useContext(TodoContextUpdate);

  return (
    <div className="show-status">
      <button
        onClick={() => onChangeStatus("all")}
        className={status === "all" ? "all" : null}
      >
        All
      </button>
      <button
        onClick={() => onChangeStatus("active")}
        className={status === "active" ? "active" : null}
      >
        Active
      </button>
      <button
        onClick={() => onChangeStatus("completed")}
        className={status === "completed" ? "completed" : null}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoShow;
