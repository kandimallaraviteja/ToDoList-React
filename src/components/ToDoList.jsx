
import ToDoItem from "./ToDoItem";
import styles from './todolist.module.css'

export default function ToDoList({ todos, setTodos }) {  // Destructure todos

    const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));

    return (
        <div className={styles.todoList}>
            {sortedTodos.length === 0 ? (<p>No todos yet. Add some!</p>) : ""}
            {sortedTodos.map((item, index) => (
                <ToDoItem key={index.name} item={item} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    );
}
