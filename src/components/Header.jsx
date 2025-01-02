import styles from "./header.module.css";
export default function Header() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear().toString().slice(-2)}`;

  console.log(formattedDate);
  // Example Output: (08/12/24)(Sunday)

  return <div className={styles.header}>Todo List On {formattedDate} </div>;
}
