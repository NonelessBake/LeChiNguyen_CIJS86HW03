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

// import { useState } from "react";

// const TodoApp = () => {
//   const list = [
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: crypto.randomUUID(), taskName: "Github", completed: false },
//     { id: crypto.randomUUID(), taskName: "DOM", completed: false },
//     { id: crypto.randomUUID(), taskName: "Loop", completed: true },
//     { id: "Last", taskName: "Last", completed: true },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const limitPerPage = 20;
//   const lastIndex = currentPage * limitPerPage;
//   const firstIndex = lastIndex - limitPerPage;
//   const maxPage = Math.ceil(list.length / limitPerPage);
//   const listCurrentPage = list.slice(firstIndex, lastIndex);
//   const buttonPage = Array.from(Array(maxPage).keys());
//   const onChangePage = (num) => {
//     setCurrentPage(num);
//   };

//   let isPrevLast = false;
//   let isNextLast = false;
//   currentPage === 1 ? (isPrevLast = true) : (isPrevLast = false);
//   currentPage === maxPage ? (isNextLast = true) : (isNextLast = false);
//   const onPrevPage = () => {
//     return setCurrentPage(currentPage - 1);
//   };
//   const onNextPage = () => {
//     return setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div>
//       {listCurrentPage.map((item) => (
//         <div key={item.id}>{item.taskName}</div>
//       ))}
//       {!isPrevLast && <button onClick={() => onPrevPage()}>Prev</button>}
//       {buttonPage.map((item, index) => (
//         <button onClick={() => onChangePage(item + 1)} key={index}>
//           {item + 1}
//         </button>
//       ))}
//       {!isNextLast && <button onClick={() => onNextPage()}>Next</button>}
//     </div>
//   );
// };

// export default TodoApp;
