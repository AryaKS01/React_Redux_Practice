import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
      </center>

      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <center>
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      </center>
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </>
  );
}

export default App;
