import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go to College",
      dueDate: "4/10/23",
    },
    {
      name: "run like flash",
      dueDate: "4/8/22",
    },
  ];
  return (
    <>
      <center classNameName="todo-container">
        <AppName></AppName>
      </center>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </>
  );
}

export default App;
