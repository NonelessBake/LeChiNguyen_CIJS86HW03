import ToDoInput from "./ToDoInput";
import TodoContextProvider from "./TodoContext";

import ToDoActionTask from "./ToDoActionTask";
import TodoTaskList from "./TodoTaskList";

const TodoApp = () => {
  return (
    <TodoContextProvider>
      <h1>Todo List</h1>
      <ToDoInput />
      <ToDoActionTask />
      <TodoTaskList />
    </TodoContextProvider>
  );
};

export default TodoApp;
