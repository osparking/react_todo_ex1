import React from "react";
import TodoJob from "./TodoJob";
import styles from "./todoJobs.module.css";
export default function TodoJobs({ todolist, setTodolist }) {
  const sortedList = todolist
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todojobs}>
      {sortedList.length === 0 ? <p className={styles.todoName}>(없음)</p> :
      sortedList.map((todo, i) => (
        <TodoJob
          key={i}
          index={i}
          todo={todo}
          todolist={todolist}
          setTodolist={setTodolist}
        />
      ))}
    </div>
  );
}
