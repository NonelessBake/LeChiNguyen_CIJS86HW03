import "../assets/style/style.css";
import TodoActionTask from "./TodoActionTask";
import TodoInputTask from "./TodoInputTask";
import TodoTaskList from "./TodoTaskList";
import { TodoProvider } from "./TodoContext";

function TodoApp() {
  return (
    <div className="form-container">
      <form id="to-do-form">
        <h2 id="tittle">TO DO LIST</h2>
        <TodoProvider>
          <TodoInputTask />
          <TodoActionTask />
          <TodoTaskList />
        </TodoProvider>
      </form>
    </div>
  );
}

export default TodoApp;
