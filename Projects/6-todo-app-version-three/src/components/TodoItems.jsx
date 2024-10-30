import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.todoHeading}>
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoItems;
