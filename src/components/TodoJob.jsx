import React from "react";
import styles from "./todoJob.module.css";
export default function TodoJob({ index, todo, todolist, setTodolist }) {
  const strikeThruIfdone = todo.done ? styles.taskCompleted : "";
  function todoRowClicked(index) {
    console.log("index: ", index);
    setTodolist(
      todolist.map((task) =>
        task.seqno === todo.seqno ? { ...task, done: !task.done } : task
      )
    );
  }
  return (
    <div className={styles.todoLine}>
      <div className={styles.todoName}>
        <span
          onClick={() => todoRowClicked(index)}
          className={strikeThruIfdone}
        >
          {todo.subject}
        </span>
        <button
          onClick={() =>
            setTodolist(todolist.filter((candi) => candi.seqno !== todo.seqno))
          }
          className={styles.delButton}
        >
          x
        </button>
      </div>
      <hr className={styles.horizLine} />
    </div>
  );
}
