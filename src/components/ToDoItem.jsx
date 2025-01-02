import styles from './todoitem.module.css';
export default function ({ item, todos, setTodos }) {
  function handleDteleteItem(item) {
    console.log("button clciked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    console.log("button clciked", name);
    const newTodos = todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo);
    setTodos(newTodos);
    console.log("todos....", todos)
  }
  const itemCompleted = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={itemCompleted} onClick={() => handleClick(item.name)}> {item.name} </span>
        <button onClick={() => handleDteleteItem(item)} className={styles.deleteButton}>x</button>
      </div>


      <hr className={styles.line} />
    </div>
  );
}
